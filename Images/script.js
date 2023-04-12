import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin: 0;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    color: #999;
  }
`;

const HeroSection = styled.section`
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  margin: 0;
  text-shadow: 1px 1px #333;
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  margin: 20px 0 0;
  text-shadow: 1px 1px #333;
`;

const AboutSection = styled.section`
  padding: 100px 0;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const SkillsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Skill = styled.li`
  background-color: #ddd;
  color: #333;
  font-size: 1.2rem;
  margin-right: 10px;
  padding: 10px 20px;
`;

const ServicesSection = styled.section`
  background-color: #f4f4f4;
  padding: 100px 0;
`;

const ServicesTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CardText