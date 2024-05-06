import { ReactElement } from "react";
import { Box } from "@mui/material";
import { Typography } from '@mui/material'

const FooterComponent = (): ReactElement => {
    return (<>
        <Box sx={{ bgcolor: 'background.paper', p: 2 }}>
            <Typography variant="body1" align="center">
                Meu Footer
            </Typography>
        </Box>

    </>
    )
}

export { FooterComponent }