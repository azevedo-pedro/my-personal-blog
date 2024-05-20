import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import { MainContent } from "../styles/base"

const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
       Olá! Meu nome é Pedro Azevedo, e sou um desenvolvedor frontend apaixonado 
       por criar interfaces de usuário intuitivas e responsivas. Com 7 anos de 
       experiência em desenvolvimento web, tenho trabalhado extensivamente 
       com tecnologias como HTML, CSS, JavaScript e React. 
      </p>
      <p>      
       Recentemente, embarquei em uma nova jornada para me tornar um 
       desenvolvedor full stack, mergulhando no poderoso mundo do Ruby on Rails.
      </p>
      
      <h2>Minha Jornada</h2>

      <h3>Início no Frontend:</h3>
      <p>
        Minha carreira começou como desenvolvedor frontend, onde tive a oportunidade 
        de colaborar em diversos projetos, desde websites corporativos até aplicações web complexas. 
        Durante esse período, desenvolvi uma forte habilidade em transformar designs em experiências 
        de usuário fluidas e envolventes. Utilizei ferramentas modernas como React, 
        Redux e Webpack, e sempre busquei seguir as melhores práticas de desenvolvimento, incluindo 
        acessibilidade e performance.
      </p>
      <h3>Transição para Full Stack:</h3>
      <p>
        Sentindo a necessidade de expandir meus horizontes e entender o desenvolvimento de aplicações de ponta a ponta, 
        decidi mergulhar no backend. Escolhi Ruby on Rails por sua filosofia de "convenção sobre configuração" e pela 
        eficiência que proporciona no desenvolvimento de aplicações robustas. Tenho estudado e aplicado conceitos 
        fundamentais de backend, como arquitetura de APIs, banco de dados relacionais e segurança, enquanto continuo 
        aprimorando minhas habilidades em frontend.
      </p>
      <h3>Minha Filosofia:</h3>
      <p>
        Acredito que o desenvolvimento web deve ser uma experiência colaborativa e contínua de aprendizado. 
        Estou constantemente explorando novas tecnologias e abordagens para criar soluções inovadoras e eficazes. 
        Meu objetivo é ajudar outros desenvolvedores a crescerem e se adaptarem às mudanças rápidas do mundo da tecnologia, 
        compartilhando conhecimentos e experiências de forma aberta e acessível.
      </p>

      <h2>Conecte-se Comigo</h2>

      <p>
       Estou sempre aberto a novas ideias, colaborações e discussões sobre desenvolvimento web. 
       Sinta-se à vontade para entrar em contato comigo através das minhas redes sociais ou pelo meu e-mail. 
       Vamos construir algo incrível juntos!
       Obrigado por visitar meu blog e acompanhar minha jornada.
      </p>

      <SocialLinks />
    </MainContent>
  </Layout>
)

export default AboutPage
