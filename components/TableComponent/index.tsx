import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const TableComponent = ({ card }) => {
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));

  return (
    <>
      <Box
        textAlign="center"
        sx={{
          borderBottom: `1px solid ${palette.neutral.soft}`,
          paddingTop: "0px !important",
        }}
      >
        <Typography fontSize={isMobile ? 20 : 22}>{card.title}</Typography>
        <Image src={card.image} alt={card.title} width={150} height={150} />
      </Box>

      {card.features.map((feature, idx) => (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          my={2}
          key={idx}
          minHeight={"80px"}
        >
          <Box>
            <Image
              src={feature.icon}
              alt={feature.text}
              width={24}
              height={24}
            />
            {feature.secondIcon && (
              <Image
                src={feature.icon}
                alt={feature.text}
                width={24}
                height={24}
              />
            )}
          </Box>
          <Typography textAlign="center" fontSize={15} lineHeight={"21px"}>
            {feature.text}{" "}
            {feature.info && (
              <Typography
                color={palette.brand.default}
                textTransform="uppercase"
              >
                {feature.info}
              </Typography>
            )}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default TableComponent;
