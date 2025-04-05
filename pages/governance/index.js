// pages/governance/index.js
import React from 'react';
import Link from 'next/link';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Grid,
  LinearProgress,
} from '@mui/material';

// Sample proposals data
const proposals = [
  {
    id: 1,
    title: 'Milestone 1: Prototype Approval',
    description: 'Approve the initial prototype milestone for our startup.',
    voteCount: 120,
    quorum: 200,
    stage: 'Concept Approval',
    // If true, indicates that weighted voting is used for this proposal.
    weighted: true,
  },
  {
    id: 2,
    title: 'Milestone 2: Budget Adjustment',
    description: 'Approve changes to the budget allocation for milestone 2.',
    voteCount: 150,
    quorum: 200,
    stage: 'Detailed Vote',
    weighted: false,
  },
];

export default function GovernanceDashboard() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Governance Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Review proposals, cast your vote, and participate in milestone decisions.
      </Typography>
      <Grid container spacing={3}>
        {proposals.map((proposal) => {
          const progress = (proposal.voteCount / proposal.quorum) * 100;
          return (
            <Grid item xs={12} md={6} key={proposal.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">{proposal.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {proposal.description}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="caption" display="block">
                      Stage: {proposal.stage}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress > 100 ? 100 : progress}
                      sx={{ mt: 1, height: 10, borderRadius: 5 }}
                    />
                    <Typography variant="caption" display="block">
                      {proposal.voteCount} / {proposal.quorum} votes
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link href={`/governance/vote?id=${proposal.id}`} passHref>
                    <Button variant="contained" size="small" color="primary">
                      Vote
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" align="center" color="text.secondary">
          Investor Protection • Transparency • Dispute Resolution
        </Typography>
      </Box>
    </Container>
  );
}
