// src/Foods.js
import React from "react";
import ItemsCard from "../components/ItemsCard";
import Grid from "@mui/material/Grid";
import { FoodData } from "./FoodData";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import{Card,Container, CardContent} from '@mui/material';

export default function Foods() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        {/* <Typography variant="h4" gutterBottom>
          Finalite sa za da se pechelqt, te ne se igraqt. Smisul igraqt se ama edniniq pecheli a drugiq e na vtoro mqsto!
        </Typography> */}
      </div>
      <Grid container spacing={3}>
        {FoodData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ItemsCard
              image={item.image}
              title={item.titleName}
              info={item.info}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={8}>
              <Card>
              <CardContent>
            <Typography variant="h6" gutterBottom>Important Information</Typography>
            <Typography component="div">
              <ul style={{ paddingLeft: '20px', textAlign:"left" }}>
                <li>
                <strong>Protein</strong> is indispensable for anyone engaged in a fitness lifestyle because it supports muscle 
                  repair and growth, aids recovery, helps manage weight, boosts metabolism, and plays a crucial 
                  role in overall health and bodily functions.
                </li>
                <li>
                  <strong>Muscle repair and growth:</strong> Protein is essential for repairing and building muscle tissues. 
                  After exercise, particularly resistance training, muscle fibers experience small tears. 
                  Protein provides the amino acids necessary for the repair and growth of these fibers, leading to 
                  increased muscle mass and strength.
                </li>
                <li>
                <strong>Recovery:</strong> Adequate protein intake helps speed up recovery after workouts. It reduces muscle soreness
                and fatigue, allowing for more consistent and effective training sessions.
                </li>
                <li>
                <strong>Enzyme Production:</strong> Many enzymes, which are essential for thousands of biochemical reactions in the body, are proteins. 
                These enzymes aid in digestion, energy production, blood clotting, and muscle contraction.
                </li>
                <li>
                <strong>Hormone Production:</strong> Proteins play a role in the production of various hormones, including those that regulate metabolism, 
                appetite, and muscle growth (such as insulin, glucagon, and growth hormone).
                </li>
              </ul>
            </Typography>
          </CardContent>
              </Card>
      </Grid>
    </div>
  );
}
