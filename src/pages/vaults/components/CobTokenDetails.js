import React, {useState, useEffect, useReducer} from 'react'
import styled from "styled-components"
import {fetchCobTokenInfo} from "../../../utils/fetchUserData"
import {BsArrowUpRight} from "react-icons/bs"
import {Placeholder} from "react-bootstrap"
import useFetchCobDetails from "../../../hooks/useFetchCobDetails"

import useGraphQuery from '../../../hooks/useGraphQuery'
import { cobQuery, masterChefQuery } from "../../../queries/portfolioQueries";
import { toFixed } from "../../../utils/nft"
import {useRefresh} from "../../../utils/useRefresh";



const SubHeaderGridContainer = styled.div`
    margin-top: 100px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    justify-content: center; 
    align-content: center; 
    justify-items: center; 
    align-items: center; 
    width: 100%;
    padding: 0.42em;
    backdrop-filter: blur(12px) saturate(149%);
    -webkit-backdrop-filter: blur(0px) saturate(149%);
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow:
    1.4px 4.2px 8.2px -50px rgba(0, 0, 0, 0.032),
    4.7px 14.1px 27.7px -50px rgba(0, 0, 0, 0.048),
    21px 63px 124px -50px rgba(0, 0, 0, 0.08);
`
const SubHeaderContentContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    align-content: center;
   
`

export const HeaderButtonSecondary = styled.a`
    border-radius: 15px;
    height: auto;
    width: auto;
    background: none;
    border-color: #fce984;
    border-width: 3px;
    color: #FFFFE0;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    align-self: start;
    margin-right: 15px;
    border-style: solid;

    &:hover {
        background: #fbdb37;
        border-color: #dfbb05;
        color: #dfbb05;
    
    }

    &:focus {
        background: #fbdb37;
        border-color: #dfbb05;
        color: #dfbb05;

    }

`

export const BuyButtonSecondary = styled(HeaderButtonSecondary)`
    align-self: center;
    font-size: 1em;
    padding: 0.42em;

    @media (max-width: 525px) {
        font-size: 0.69em;
    }
`

const TokenHeaderText = styled.h2`
    color: #fbdb37;
    font-weight: 600;
    font-size: 1.42em;

    @media (max-width: 525px) {
        font-size: 1em;
    }
`

const TokenText = styled.div`
    font-size: 1em;
    color: rgba(242, 242, 242, 0.88);
    font-weight: 400;
    @media (max-width: 525px) {
        font-size: 0.7em;
    }
    
`


const CobTokenDetails = (props) => {    
    const { data: graphData } = useGraphQuery(masterChefQuery(), "masterchef")
    const { data: cobSupplyData } = useGraphQuery(cobQuery(), "cob")

    const [cobTotalSupplyData, setCobTotalSupplyData] = useState(0)
    const [cobPriceData, setCobPriceData] = useState(0)
    const {slowRefresh} = useRefresh()

    useEffect(() => {
        if(cobSupplyData.cobs !== undefined) {
            const mc = cobPriceData * cobSupplyData.cobs[0].totalSupply
            setCobTotalSupplyData(mc)
        }
    }, [cobSupplyData, slowRefresh, cobPriceData])

    useEffect(() => {
        if(graphData.pools !== undefined) {
            const cobPool = graphData.pools.find(p => p.id === "15")
            if(cobPool !== undefined) {
                setCobPriceData(cobPool.priceUSD)
            }
        }
    }, [graphData, cobTotalSupplyData, slowRefresh])

    // const marketCap = toFixed((cobTotalSupplyData * cobPriceData), 2)
    
        return (
            <>
            <SubHeaderGridContainer style={{marginTop: "180px", marginBottom: "140px"}}>
                <SubHeaderContentContainer>
              
                    <TokenHeaderText>COB Token</TokenHeaderText>
                    <BuyButtonSecondary href='https://quickswap.exchange/#/swap?outputCurrency=0x648FA1E7Dd2722Ba93EC4Da99f2C32347522a37C' target="_blank">
                        Quick <BsArrowUpRight />
                    </BuyButtonSecondary>
                </SubHeaderContentContainer>
                <SubHeaderContentContainer>
                    <TokenHeaderText>Market Cap</TokenHeaderText>
                    {}
                    <TokenText>${toFixed(cobTotalSupplyData, 2)}</TokenText>
                </SubHeaderContentContainer>
                <SubHeaderContentContainer>
                    <TokenHeaderText>Price</TokenHeaderText>
                    <TokenText>${cobPriceData}</TokenText>
                </SubHeaderContentContainer>
            </SubHeaderGridContainer>
            </>
        )
    
    
}




export default CobTokenDetails
