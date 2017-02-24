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
  dancer: require("../assets/theme-background.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  tree: require("../assets/component-tree.png"),
  tree2: require("../assets/component-tree-2.png"),
  uiasstate: require("../assets/ui-as-state.jpg"),
  mehcat: require("../assets/mehcat.jpg"),
  understanding: require("../assets/understanding.jpg"),
  vue: require("../assets/vue.png"),
  cra: require("../assets/create-react-app.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#24204B",
  quartenary: "#CECECE",
  light: '#665eb9'
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgImage={images.dancer.replace("/", "")} bgDarken={0.2}>
          <Text margin="10px 0 0" textColor="quartenary" size={1} fit bold caps>
            Welcome to
          </Text>
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React
          </Heading>
          <Text margin="10px 0 0" textColor="light" size={1} fit bold>
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
            <Appear><ListItem>How do I start?</ListItem></Appear>
            <Appear><ListItem>Basic building blocks of react</ListItem></Appear>
            <Appear><ListItem>Live code demo</ListItem></Appear>
            <Appear><ListItem>Where to go next?</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Image src={images.understanding.replace("/", "")} height="700px" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            I am a big believer in research
          </Heading>
          <Appear><Heading size={1} fit caps lineHeight={1} textColor="secondary">
            I asked people
          </Heading></Appear>
          <Appear><Heading size={3} fit caps lineHeight={1} textColor="tertiary">
            So what do you think react is?</Heading></Appear>
          
          <Appear><Text margin="10px 0 0" textColor="quartenary" size={1} fit bold>
            Here is what they said
          </Text></Appear>

          <Layout>
            <Fill>
              <List>
                <Appear><ListItem>a front end JavaScript framework</ListItem></Appear>
                <Appear><ListItem>a substitute for Angular </ListItem></Appear>
                <Appear><ListItem>a replacement for jQuery</ListItem></Appear>
                <Appear><ListItem>library for faster DOM manipulation</ListItem></Appear>
                <Appear><ListItem>a way to build fast user interfaces</ListItem></Appear>
                <Appear><ListItem>a way to build web components</ListItem></Appear>
                <Appear><ListItem>a way to build apps with custom tags</ListItem></Appear>
              </List>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading size={1} margin="10px 0 50px"> I was like...</Heading>
          <Appear><Image src={images.mehcat.replace("/", "")} height="320px"  /></Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
            React is something Simpler and Smaller than that
          </Heading>
          <Appear><Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            So what is react?
          </Heading></Appear>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={4}  caps lineHeight={1} textColor="secondary" margin="10px 0 50px">
            JavaScript library for building user interfaces
          </Heading>
          <Appear><Heading size={5}  caps lineHeight={1} textColor="secondary" margin="10px 0 50px">
            What does React do?
          </Heading></Appear>
          <Appear>
            <Text margin="10px 0 50px" lineHeight={1.2} textColor="tertiary" size={1} fill bold>
            It helps you build UI Components that automatically update and render when the state of your application changes
            </Text>
          </Appear>
  
        </Slide>



        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote lineHeight={3}>
            <Quote textSize="1em" lineHeight={3}>Using React you simply express how your app 
            should look based on your data at any given point in time.
            When your data changes React handles automatically all the UI updates, saving you from 
            imperatively manipulate the DOM. Which makes React very simple and declarative.
            </Quote>
            <Cite>Osmel Mora <a href="https://medium.com/react-ecosystem/react-a-gentle-introduction-407fb59d3514#.n82suggdc">React, a gentle introduction.</a></Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={6} textSize={21}  caps lineHeight={1} textColor="secondary" margin="10px 0 50px">
            How you write your vanilla JS and jQuery Today
          </Heading>
          <CodePane textSize="22"
            lang="jsx"
            source={require("raw-loader!../assets/jquery-1")}
            margin="20px auto"
          />
          <Appear><Heading size={6} textSize={21}  caps lineHeight={1} textColor="secondary" margin="10px 0 50px">
            How react works
          </Heading></Appear>

          <Appear><CodePane textSize="22"
            lang="jsx"
            source={require("raw-loader!../assets/react-vs-jquery")}
            margin="20px auto"
          /></Appear>


        </Slide>

        <Slide>
          <Heading margin="10px 0 50px" textColor="tertiary" size={5}  bold>
          Core Concept in thinking with React 
          </Heading>
          
          <Appear><Heading  margin="0px auto 40px" size={4} fit caps lineHeight={1} textColor="secondary">
            Atomic Components
          </Heading></Appear>
          <Appear><Image src={images.tree.replace("/", "")}  height="293px"/></Appear>
          <Appear><Image src={images.tree2.replace("/", "")}  height="293px"/></Appear>
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Lets build Facebook with React
          </Heading>
          <Appear>
          <CodePane textSize="24"
            lang="jsx"
            source={require("raw-loader!../assets/facebook.example")}
            margin="20px auto"
          />
          </Appear>
        </Slide>


        <Slide transition={["zoom", "slide"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            What can React do for me?
          </Heading>
           <List textColor="primary">
             <Appear><ListItem>Build front end components</ListItem></Appear>
             <Appear><ListItem>Render front end components</ListItem></Appear>
             <Appear><ListItem>Handle user interactions</ListItem></Appear>
             <Appear><ListItem>Update components on state change</ListItem></Appear>
             <Appear><ListItem>That's It</ListItem></Appear>
           </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            So how do I...?
          </Heading>
          <List>
             <Appear><ListItem>Work with data and models?</ListItem></Appear>
             <Appear><ListItem>Manipulate business logic?</ListItem></Appear>
             <Appear><ListItem>What about Forms?</ListItem></Appear>
             <Appear><ListItem>Manipulate the DOM?</ListItem></Appear>
             <Appear><ListItem>Add Routing to pages?</ListItem></Appear>
           </List>
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
            <Appear><ListItem>You need performance (Virtual DOM)</ListItem></Appear>
            <Appear><ListItem>Want Code that is maintainable</ListItem></Appear>
            <Appear><ListItem>Code that is easier to reason about</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              When should I NOT choose React?
          </Heading>
          <List>
            <Appear><ListItem>When you DON'T have a lot of time</ListItem></Appear>
            <Appear><ListItem>When you want sprinkles of javascript</ListItem></Appear>
            <Appear><ListItem>When you don't have to manage state</ListItem></Appear>
            <Appear><ListItem>When you dislike advanced tooling</ListItem></Appear>
            <Appear><ListItem>When you can't handle JSX</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote lineHeight={3}>
            <Quote>Choosing between Angular and React is like choosing between buying an off-the-shelf computer
             and building your own with off-the-shelf parts.</Quote>
            <Cite>Cory House <a href="https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51#.f08yugsfp">Angular2 vs React</a></Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
              I don't have the time
          </Heading>
          <Heading size={3} fit margin="10px 0 50px"  caps lineHeight={1} textColor="tertiary">
              What should You choose instead of React?
          </Heading>
          <Appear><Image src={images.vue.replace("/", "")}  height="293px"/></Appear>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Basic building blocks of react 
          </Heading>
          <List>
            <Appear><ListItem>JSX Components</ListItem></Appear>
            <Appear><ListItem>State</ListItem></Appear>
            <Appear><ListItem>Props</ListItem></Appear>
            <Appear><ListItem>The Component Lifecycle</ListItem></Appear>
          </List>
        </Slide>
        
         <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              JSX Components 
          </Heading>
          <Appear><Text>JavaScript Syntax Extension</Text></Appear>
          <List>
            <Appear><ListItem>What are they?</ListItem></Appear>
            <Appear><ListItem>What do they look like?</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <Heading size={5} caps lineHeight={1} textColor="tertiary">
              JSX is the UI
          </Heading>
          <CodePane textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/jsx-example")}
            margin="20px auto"
          />
        </Slide>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Props
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/props-example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane textSize="22px"
            lang="jsx"
            source={require("raw-loader!../assets/props-child-example")}
            margin="20px auto"
          />
        </Slide>
        
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              State
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane textSize="18px"
            lang="jsx"
            source={require("raw-loader!../assets/state-example")}
            margin="20px auto"
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              Life Cycle of React Component
          </Heading>
          <List>
            <Appear><ListItem>componentWillMount</ListItem></Appear>
            <Appear><ListItem>shouldComponentUpdate</ListItem></Appear>
            <Appear><ListItem>componentWillUpdate</ListItem></Appear>
            <Appear><ListItem>componentDidUpdate</ListItem></Appear>
            <Appear><ListItem>componentWillReceiveProps</ListItem></Appear>
            <Appear><ListItem>componentWillUnmount</ListItem></Appear>
          </List>
        </Slide>


        <Slide transition={["zoom", "slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            How do I start right now with React?
          </Heading>

          <Link href="https://github.com/facebookincubator/create-react-app">
            https://github.com/facebookincubator/create-react-app
          </Link>
          <Image src={images.cra.replace("/", "")}  height="293px"/>
          <Appear>
            <Heading size={3} caps lineHeight={1} textColor="secondary">
              Demo Time
            </Heading>
          </Appear>
          <Appear><Text>😅</Text></Appear>
        </Slide>


        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane textSize="18px"
            lang="jsx"
            source={require("raw-loader!../assets/react-app-install")}
            margin="20px auto"
          />
        </Slide>
          
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary" margin="10px 0 50px">
            Want more JS in your life?
          </Heading>
          <Link href="http://bit.ly/more-js" target="_blank">http://bit.ly/more-js</Link>
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
