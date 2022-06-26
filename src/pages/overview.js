import React from "react";
import myData from '../chocolate-data.json';
import '../overview.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Overview() {
    return (
        <div>
            {myData && myData.data.map(data_filter => {
                return (
                    <Accordion>
                        <AccordionSummary
                            sx={{
                                bgcolor: '#0277bd',
                                color: 'white',
                                '&:hover': {
                                    bgcolor: '#039be5',
                                    color: 'white',
                                    '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: 'white' }
                                }
                            }}
                            expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontWeight: 'bold' }}>{data_filter.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Typography style={{ fontWeight: 'bold' }}>{data_filter.brand} <hr /></Typography>
                                {data_filter.prices && data_filter.prices.map(price_data => {
                                    return (
                                        <div>
                                            {price_data.price}€ /&nbsp;
                                            {price_data.amount} {price_data.unit}<br />
                                            <a href={price_data.link}>{price_data.shop}</a>
                                        </div>
                                    )
                                })}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })
            }
        </div>
    );
}

export default Overview;