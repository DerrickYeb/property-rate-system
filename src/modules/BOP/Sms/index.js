import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import { SegmentedControl } from '@mantine/core'
import React, { useState } from 'react'
import Card from '~components/Card/card'
import { IconCode, IconExternalLink } from '@tabler/icons';
import SingleSMS from './components/singleSms';
import BulkSMS from './components/bulkSms';


const SMS = () => {
    const [selectedUser,setSelectedUser] =useState()
  return (
    <Grid gap={4} templateColumns={{
        base:'1fr',lg:"auto"
    }}>
        <GridItem display={'flex'} justifyContent={'center'}>
        <Card width="500px">
            <SegmentedControl color={'blue'} size="xs"
            onClick={(e) => setSelectedUser(e.target.value)}
              data={[
                {
                  value: 'single',
                  label: (
                    <Center>
                      <IconCode size={16} />
                      <Box ml={10}>Single SMS</Box>
                    </Center>
                  ),
                },
                {
                  value: 'bulk',
                  label: (
                    <Center>
                      <IconExternalLink size={16} />
                      <Box ml={10}>Bulk SMS</Box>
                    </Center>
                  ),
                },
              ]}/>
        </Card>
        </GridItem>
        <Card>
            {
                selectedUser === "single" ? (<SingleSMS/>)
                :<BulkSMS/>
            }
        </Card>
    </Grid>
  )
}

export default SMS