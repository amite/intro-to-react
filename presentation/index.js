// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill, S,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../default/";

// Require CSS
require("normalize.css");
require("../default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold caps>
            Welcome to
          </Text>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            An Introduction for absolute beginners
          </Text>
        </Slide>
        

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What we will cover  today
          </Heading>
          <List textColor="primary">
            <Appear><ListItem>What is React?</ListItem></Appear>
            <Appear><ListItem>When should I choose it?</ListItem></Appear>
            <Appear><ListItem>When should I not to choose it!?</ListItem></Appear>
            <Appear><ListItem>Basic building blocks of react</ListItem></Appear>
            <Appear><ListItem>How do I start?</ListItem></Appear>
            <Appear><ListItem>Live code demo</ListItem></Appear>
            <Appear><ListItem>Where to go next?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            So what is react?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            I asked people
          </Heading>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            Here is what they said
          </Text>

          <Layout>
            <Fill>
              <List>
                <Appear><ListItem>a front end JavaScript framework</ListItem></Appear>
                <Appear><ListItem>a substitute for Angular </ListItem></Appear>
                <Appear><ListItem>a substitute for jQuery</ListItem></Appear>
                <Appear><ListItem>library for faster DOM manipulation</ListItem></Appear>
                <Appear><ListItem>a way to build fast user interfaces</ListItem></Appear>
                <Appear><ListItem>a way to build web components</ListItem></Appear>
                <Appear><ListItem>a way to build apps with custom tags</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React is the V of MVC
          </Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What does that mean?
          </Heading>
          <Markdown textColor="secondary">
            {`
  * Build front end components
  * Render front end components
  * Handle user interactions
  * Update components on state change
            `}
          </Markdown>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            So how do I...?
          </Heading>
          <Markdown textColor="tertiary">
            {`
  * Work with data and models?
  * Manipulate business logic?
  * Manipulate the DOM?
  * Add Routing to pages?
  * Animate the DOM?
            `}
          </Markdown>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            The answers are in the community and ecosystem
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
                      Not in the library
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              When should I choose React?
          </Heading>
          <List>
            <Appear><ListItem>When you have a lot of time</ListItem></Appear>
            <Appear><ListItem>When you are building a SPA</ListItem></Appear>
            <Appear><ListItem>When you want amazing components</ListItem></Appear>
            <Appear><ListItem>When you want consistent design</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              When should I  NOT choose React?
          </Heading>
          <List>
            <Appear><ListItem>When you DON'T have a lot of time</ListItem></Appear>
            <Appear><ListItem>When you want sprinkles of javascript</ListItem></Appear>
            <Appear><ListItem>When you want amazing components</ListItem></Appear>
            <Appear><ListItem>When you want consistent design</ListItem></Appear>
          </List>
        </Slide>
        
        <Slide transition={["slide"]} bgColor="primary">
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            
          </Text>
          <Layout>
            <Fill>
              <List>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <List>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
                <Appear><ListItem>Item 1</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
          
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
