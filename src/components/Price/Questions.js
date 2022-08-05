import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { theme } from "../../theme";

export default function Questions() {
  return (
    <Grid item sx={{ pl: 22, pr: 22 }}>
      <Typography
        variant="h3"
        fontWeight={700}
        color={theme.palette.primary.dark}
        sx={{ textAlign: "center", mb: 3 }}
      >
        Frequently Asked Questions
      </Typography>
      <Typography
        variant="h6"
        color={theme.palette.primary.grey}
        sx={{ textAlign: "center", mb: 3, opacity: 0.65 }}
      >
        A lot of people don't appreciate the moment until it’s passed. I'm not
        trying my hardest, and I'm not trying to do
      </Typography>
      <Grid item>
        {questions.map((question) => {
          return (
            <Accordion sx={{ p: 2, boxShadow: "none" }} disableGutters>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color={theme.palette.primary.grey}
                >
                  {question.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  color={theme.palette.primary.grey}
                  sx={{ opacity: 0.6 }}
                >
                  {question.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}

        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </Grid>
    </Grid>
  );
}

const questions = [
  {
    title: "How do I order?",
    content:
      "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
  },
  {
    title: "How can iI make the payment?",
    content:
      "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too. We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
  },
  {
    title: "How much time does it take to receive the order?",
    content:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "Can I resell the products?",
    content:
      "I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything. If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "Where do I find the shipping details?",
    content:
      "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment. I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.",
  },
];
