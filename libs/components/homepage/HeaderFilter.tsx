import { Button, Stack, Typography } from "@mui/material";
import  {useRouter} from 'next/router';



const HeaderFilter = () => {

   const router = useRouter();

  return (
    <>
      <Stack className={"hero-section"}>
        <Stack className={"lg"}>
          <Stack className={"hero-content"}>
            <Typography variant={"h2"} className={"hero-title"} gutterBottom> Find Your Perfect <span className="highlight"> Furniture</span>
            </Typography>
            <Typography variant="h6" className="hero-subtitle" gutterBottom>
             Rent or buy prenuim furniture for your home and office. Quality pieces from trusted sellers.
            </Typography>
            <Stack
               direction={{xs:'column', sm:'row'}}
               spacing={2}
               justifyContent={'center'}
               className="hero-buttons"
               >
                <Button
                variant="contained"
                color="warning"
                size="large"
                onClick={() => router.push('/property')}
                >
                  Browse Properties
                </Button>
                <Button
                  variant="outlined"
                  color="warning"
                  size="large"
                  onClick={() => router.push('/agents')}

                >
                Find Agents
                </Button>

            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default HeaderFilter