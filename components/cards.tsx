import styled from "styled-components";
import Link from "next/link";
import { UrlObject } from "url";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

interface StyledLinkProps {
  href: string | UrlObject;
  name: any;
}

const StyledLink = ({ href, name }: StyledLinkProps) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
);

export default function Cards() {
  return (
    <FlexContainer>
      <Card>
        <StyledLink href="/about" name="About Page &rarr;" />
      </Card>
      <Card>
        <StyledLink href="/demo" name="Demo Page &rarr;" />
      </Card>
      <Card>
        <StyledLink href="/project-view" name="Project View &rarr;" />
      </Card>
    </FlexContainer>
  );
}
