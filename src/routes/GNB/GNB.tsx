import { Box } from '@mui/material'
import { ColaworkLogo, ColaworkTitle } from 'assets/svgs'

const GNB = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box ml={3} mt={1} mr={2}>
        <ColaworkLogo />
      </Box>
      <Box>
        <ColaworkTitle />
      </Box>
    </Box>
  )
}
export default GNB
