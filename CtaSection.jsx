import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background-color: #007bff;
    border-radius: 4px;
    max-width: 1300px;
    margin: 0 auto;
`;

const Container = styled.div`
    padding: 20px;
`;

const InnerDiv = styled.div`
    position: relative;
    overflow: hidden;
    background-color: #007bff;
    padding: 12px 8px;
`;

const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: -4px;
    color: #fff;
    gap: 1rem;
`;

const HalfDiv = styled.div`
    flex: 0 0 50%;
    width: 100%;
    padding: 4px;
`;

const Button = styled.button`
    display: inline-block;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    color: #007bff;
    background-color: #fff;
    font-family: inherit;
    transition: 0.3s ease-in-out;
    
    &:hover {
        background-color: transparent;
        border: 1px solid #fff;
        color: #fff;
    }
`;


export default function CtaSection() {
    return (
        <Section>
            <Container>
                <InnerDiv>
                    <FlexDiv>
                        <HalfDiv>
                            <span>Find Your Next Dream App</span>
                            <h2>
                                <span>Get started with </span>
                                <span>our free trial</span>
                            </h2>
                        </HalfDiv>
                        <Button>Get Started</Button>
                    </FlexDiv>
                </InnerDiv>
            </Container>
        </Section>
    );
}