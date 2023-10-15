import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Image = () => {
    return <img
        className="object-fit-contain"
        src="https://ik.imagekit.io/9um5tdigihm/8/storage/catalog/campaign/12150/1/12150_2_57d8bbb952ba472a89cc42fb4a4f25fb_1670571689.png"
        style={{ height: "8em", width: "8em" }}
    />
}

function SideThumbnail() {
    return (
        <Box
            sx={{ flexGrow: 1, display: 'flex', height: '29em', justifyContent: "end", paddingRight: 1 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons={false}
                aria-label="Vertical tabs example"
            >
                <Tab sx={{ padding: 0, border: 1, borderColor: "rgb(220 215 215)", borderRadius: "1em", marginBottom: "0.5em" }} icon={<Image />} />
                <Tab sx={{ padding: 0, border: 1, borderColor: "rgb(220 215 215)", borderRadius: "1em", marginBottom: "0.5em" }} icon={<Image />} />
                <Tab sx={{ padding: 0, border: 1, borderColor: "rgb(220 215 215)", borderRadius: "1em", marginBottom: "0.5em" }} icon={<Image />} />
                <Tab sx={{ padding: 0, border: 1, borderColor: "rgb(220 215 215)", borderRadius: "1em", marginBottom: "0.5em" }} icon={<Image />} />
                <Tab sx={{ padding: 0, border: 1, borderColor: "rgb(220 215 215)", borderRadius: "1em", marginBottom: "0.5em" }} icon={<Image />} />
            </Tabs>
        </Box >
    )
}

export default SideThumbnail