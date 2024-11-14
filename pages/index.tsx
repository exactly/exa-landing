import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { animated, useTransition } from "@react-spring/web";
import Image from "next/image";
import Flyer from "../components/Flyer";
import { useParallaxConfig } from "../hooks/useParallaxConfig";
import { cards, carrouselImages, faqs, steps } from "../data";
import TableComponent from "../components/TableComponent";

const NewLandingPage = () => {
  const parallaxRef = useRef<IParallax | null>(null);
  const { palette, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const config = useParallaxConfig();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [expanded, setExpanded] = useState<number | false>(false);

  useEffect(() => {
    const container = parallaxRef.current?.container?.current;
    if (container) {
      const handleScroll = () => {
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const scrollTop = container.scrollTop;

        const maxScroll = scrollHeight - clientHeight;
        let progress = scrollTop / maxScroll;

        if (scrollTop >= maxScroll - 1) {
          progress = 1;
        } else if (progress > 0.98) {
          const remaining = (1 - progress) * 50;
          progress = 1 - remaining;
        }

        setScrollProgress(progress);
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const currentDevice = isMobile ? "mobile" : "desktop";

  const animations = config.sections.intro.animations;
  const worldwideAnimations = config.sections.worldwide.animations;
  const freeCardAnimations = config.sections.freeCard.animations;
  const secureAnimations = config.sections.secure.animations;
  const bigPurchaseAnimations = config.sections.bigPurchase.animations;

  const [index, setIndex] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    let interval;
    if (!isManual) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 4);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isManual]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 1, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(-100%,0,0)" },
    config: { duration: 500 },
  });

  return (
    <Box style={{ width: "100%", height: "120vh" }}>
      <Parallax
        ref={parallaxRef}
        pages={config.pages.total}
        style={{ overflow: "auto" }}
      >
        <Flyer />

        <ParallaxLayer
          offset={config.sections.sharedBackground.offset}
          factor={config.sections.sharedBackground.factor}
          style={{
            backgroundColor: "#F3FBF9",
          }}
        />

        <ParallaxLayer
          offset={isMobile ? 13 : 12.5}
          factor={isMobile ? 7 : 8}
          style={{
            backgroundColor: "#F3FBF9",
          }}
        />

        <ParallaxLayer
          sticky={config.sections.intro.sticky}
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 20px",
            position: "relative",
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
              minHeight: { xs: "100dvh", sm: "100vh" },
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <Box>
                <Typography
                  fontSize={{ xs: 15, md: 17 }}
                  fontWeight={400}
                  color="#5F6563"
                >
                  Introducing
                </Typography>
                <Typography
                  fontSize={{ xs: 28, md: 34 }}
                  fontWeight={700}
                  color="#1A211E"
                >
                  The first onchain
                </Typography>
                <Typography
                  fontSize={{ xs: 28, md: 34 }}
                  fontWeight={700}
                  color="#12A594"
                >
                  debit and credit card
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} sx={{ position: "relative" }}>
              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "-26vh" : "-100px",
                  right: 0,
                  width: isMobile ? "80%" : "80%",
                  margin: isMobile ? "0 auto" : "0",
                  left: isMobile ? "0" : "auto",
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    animations.card[currentDevice].startFade,
                    animations.card[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    animations.card[currentDevice].startTransform,
                    animations.card[currentDevice].endTransform,
                    {
                      initialScale: 1,
                      finalScale: isMobile ? 0.9 : 0.811,
                      initialY: animations.card[currentDevice].initialY,
                      finalY: animations.card[currentDevice].finalY,
                    }
                  ),
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/exa-card.svg"
                  alt="exa card"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </animated.div>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "30%" : "0",
                  right: 0,
                  width: isMobile ? "90%" : "80%",
                  margin: isMobile ? "0 auto" : "0",
                  left: isMobile ? "0" : "auto",
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    animations.phone[currentDevice].startFade,
                    animations.phone[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    animations.phone[currentDevice].startTransform,
                    animations.phone[currentDevice].endTransform,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: animations.phone[currentDevice].initialY,
                      finalY: animations.phone[currentDevice].finalY,
                    }
                  ),
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <Image
                  src="/phone-card-screen.png"
                  alt="phone card screen"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.worldwide.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    worldwideAnimations.text[currentDevice].startFade,
                    worldwideAnimations.text[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    worldwideAnimations.text[currentDevice].startFade,
                    worldwideAnimations.text[currentDevice].endFade,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY:
                        worldwideAnimations.text[currentDevice].initialY,
                      finalY: worldwideAnimations.text[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box margin={"0 auto"} justifyContent="center">
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    For everyone, everywhere
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    Available worldwide
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    in 180+ countries
                  </Typography>
                </Box>
              </animated.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    worldwideAnimations.image[currentDevice].startFade,
                    worldwideAnimations.image[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    worldwideAnimations.image[currentDevice].startTransform,
                    worldwideAnimations.image[currentDevice].endTransform,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY:
                        worldwideAnimations.image[currentDevice].initialY,
                      finalY: worldwideAnimations.image[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box width={isMobile ? "80%" : "100%"} margin={"0 auto"}>
                  <Image
                    src="/worldwide.svg"
                    alt="worldwide"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.freeCard.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    freeCardAnimations.text[currentDevice].startFade,
                    freeCardAnimations.text[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    freeCardAnimations.text[currentDevice].startFade,
                    freeCardAnimations.text[currentDevice].endFade,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: freeCardAnimations.text[currentDevice].initialY,
                      finalY: freeCardAnimations.text[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box>
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    No insurance or service fees
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    Activate your card
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    free of charge
                  </Typography>
                </Box>
              </animated.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    freeCardAnimations.image[currentDevice].startFade,
                    freeCardAnimations.image[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    freeCardAnimations.image[currentDevice].startTransform,
                    freeCardAnimations.image[currentDevice].endTransform,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY:
                        freeCardAnimations.image[currentDevice].initialY,
                      finalY: freeCardAnimations.image[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box width={isMobile ? "80%" : "100%"} margin={"0 auto"}>
                  <Image
                    src="/fee.svg"
                    alt="fee"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.secure.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
            padding={"0 20px"}
          >
            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    secureAnimations.text[currentDevice].startFade,
                    secureAnimations.text[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    secureAnimations.text[currentDevice].startFade,
                    secureAnimations.text[currentDevice].endFade,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: secureAnimations.text[currentDevice].initialY,
                      finalY: secureAnimations.text[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box>
                  <Typography fontSize={17} fontWeight={400} color="#5F6563">
                    Spend with peace of mind
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#1A211E">
                    All transactions are
                  </Typography>
                  <Typography fontSize={34} fontWeight={700} color="#12A594">
                    private and secure
                  </Typography>
                </Box>
              </animated.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <animated.div
                style={{
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    secureAnimations.image[currentDevice].startFade,
                    secureAnimations.image[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    secureAnimations.image[currentDevice].startTransform,
                    secureAnimations.image[currentDevice].endTransform,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: secureAnimations.image[currentDevice].initialY,
                      finalY: secureAnimations.image[currentDevice].finalY,
                    }
                  ),
                }}
              >
                <Box width={isMobile ? "80%" : "100%"} margin={"0 auto"}>
                  <Image
                    src="/secure-transactions.svg"
                    alt="secure transactions"
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </Box>
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.carousel.offset}
          style={{
            maxWidth: "1152px",
            margin: "0 auto",
            height: config.sections.carousel.layout[currentDevice].height,
            top: config.sections.carousel.layout[currentDevice].top,
            position: "relative",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              borderRadius: "32px",
              border: `1px solid ${palette.neutral.soft}`,
            }}
          >
            {transitions((style, i) => (
              <animated.div
                style={{
                  ...style,
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
                key={i}
              >
                {i === 3 ? (
                  <Box
                    display="flex"
                    width={isMobile ? "200%" : "100%"}
                    right={0}
                    position="absolute"
                  >
                    <Image
                      src={carrouselImages[i].src}
                      alt={carrouselImages[i].alt}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition={isMobile ? "75% 80%" : "50% 50%"}
                      height={368}
                      width={368}
                    />
                  </Box>
                ) : (
                  <Image
                    src={carrouselImages[i].src}
                    alt={carrouselImages[i].alt}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={isMobile ? "75% 80%" : "50% 50%"}
                  />
                )}

                {isMobile && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: isMobile
                        ? "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 47.51%, #000 64.57%)"
                        : "none",
                      backgroundBlendMode: isMobile ? "plus-darker" : "normal",
                    }}
                  ></Box>
                )}

                <Box
                  position="absolute"
                  top={isMobile ? "15%" : 0}
                  left={0}
                  width={{ xs: "100%", md: "55%" }}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  padding={{ xs: "20px", md: "98px" }}
                  color={i === 3 && !isMobile ? "#000" : "#fff"}
                >
                  <Box sx={{ marginBottom: "20px" }}>
                    <Image
                      src={carrouselImages[i].icon}
                      alt={`${carrouselImages[i].title} icon`}
                      width={50}
                      height={50}
                    />
                  </Box>

                  <Typography
                    fontSize={28}
                    fontWeight={700}
                    lineHeight={"34px"}
                    sx={{
                      marginBottom: "10px",
                    }}
                  >
                    {carrouselImages[i].title}
                  </Typography>

                  <Typography
                    fontSize={16}
                    lineHeight={"21px"}
                    color={
                      i === 3 && !isMobile
                        ? palette.neutral.secondary
                        : palette.neutral.soft
                    }
                  >
                    {carrouselImages[i].subtitle}
                  </Typography>
                </Box>
              </animated.div>
            ))}
          </Box>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              bottom: "11%",
              margin: "0 auto",
            }}
          >
            <Grid container justifyContent="space-around" spacing={1} px={3}>
              {carrouselImages.map((image, idx) => (
                <Grid item xs={3} key={idx}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setIndex(idx);
                      setIsManual(true);
                    }}
                    fullWidth
                    sx={() => ({
                      color: index === idx ? "#1A211E" : "#5F6563",
                      textAlign: "left",
                      backgroundColor:
                        index === idx
                          ? `${palette.brand.soft}`
                          : `${palette.brand.primary}`,
                      borderRadius: "12px",
                      height: isMobile ? "48px" : "56px",
                      justifyContent: isMobile ? "center" : "flex-start",
                      "&:hover": {
                        backgroundColor: `${palette.brand.soft}`,
                      },
                    })}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      gap={1}
                      p={1}
                    >
                      <Image
                        src={image.icon}
                        alt={image.alt}
                        width={isMobile ? 35 : 20}
                        height={isMobile ? 35 : 20}
                      />
                      {!isMobile && (
                        <Typography fontSize={15} fontWeight={600}>
                          {image.buttonText}
                        </Typography>
                      )}
                    </Box>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.bigPurchase.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: config.sections.bigPurchase.layout.sideLabel.left,
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform="uppercase"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                  fontSize:
                    config.sections.bigPurchase.layout.sideLabel.fontSize,
                }}
              >
                <Typography component="span" mr="16px">
                  03.
                </Typography>
                <Typography component="span" mr="16px">
                  02.
                </Typography>
                <Typography component="span" fontWeight={600}>
                  01. Installments
                </Typography>
              </Typography>
            </Box>
          )}

          <Grid
            container
            padding={config.sections.bigPurchase.layout[currentDevice].padding}
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/columns.svg"
                  alt="columns icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight="34px"
                  mb={4}
                >
                  Big purchase? Split it in up to 6 installments
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Keep your valuable assets and watch your portfolio grow while
                  paying in up to six fixed rated installments in USDC.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ paddingRight: isMobile ? 0 : 4 }}>
                <Image
                  src="/img/installments.jpg"
                  alt="installments"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={500}
                  height={500}
                />
              </Box>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "60%" : "25%",
                  right: isMobile ? "50%" : "20%",
                  width: isMobile ? "45%" : "25%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .startFade,
                    bigPurchaseAnimations.floatingElement[currentDevice].endFade
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .startTransform,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .endTransform,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: 0,
                      finalY: -100,
                    }
                  ),
                }}
              >
                <Image
                  src="/installments.svg"
                  alt="installments"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "95%" : "75%",
                  right: "5%",
                  width: isMobile ? "45%" : "20%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: config.calculateOpacity(
                    scrollProgress * config.pages.total,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .startFade + 0.3,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .endFade + 0.3
                  ),
                  transform: config.calculateTransform(
                    scrollProgress * config.pages.total,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .startTransform + 0.3,
                    bigPurchaseAnimations.floatingElement[currentDevice]
                      .endTransform + 0.3,
                    {
                      initialScale: 1,
                      finalScale: 1,
                      initialY: 0,
                      finalY: -100,
                    }
                  ),
                }}
              >
                <Image
                  src="/success-paid.svg"
                  alt="success paid"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.allInOne.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: config.sections.allInOne.layout.sideLabel.left,
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform="uppercase"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                  fontSize: config.sections.allInOne.layout.sideLabel.fontSize,
                }}
              >
                <Typography component="span" mr="16px">
                  03.
                </Typography>
                <Typography component="span" fontWeight={600} mr="16px">
                  02. Credit + debit
                </Typography>
                <Typography component="span">01.</Typography>
              </Typography>
            </Box>
          )}

          <Grid
            container
            padding={config.sections.allInOne.layout[currentDevice].padding}
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/toggle-right.svg"
                  alt="toggle right icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight="34px"
                  mb={4}
                >
                  All-in-one credit and debit virtual card
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Just choose your preferred payment method before purchasing
                  and experience seamless, flexible spending.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                height={config.sections.allInOne.layout[currentDevice].height}
                overflow="hidden"
                sx={{
                  paddingRight: isMobile ? 0 : 4,
                }}
              >
                <Image
                  src="/all-in-one-card.jpg"
                  alt="all in one"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={config.sections.virtualCard.sticky}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          {!isMobile && (
            <Box
              sx={{
                position: "absolute",
                left: config.sections.virtualCard.layout.sideLabel.left,
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                textOrientation: "upright",
              }}
            >
              <Typography
                component="div"
                color={palette.brand.default}
                textTransform="uppercase"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                  fontSize:
                    config.sections.virtualCard.layout.sideLabel.fontSize,
                }}
              >
                <Typography component="span" mr="16px" fontWeight={600}>
                  03. Earn
                </Typography>
                <Typography component="span" mr="16px">
                  02.
                </Typography>
                <Typography component="span">01.</Typography>
              </Typography>
            </Box>
          )}

          <Grid
            container
            padding={config.sections.virtualCard.layout[currentDevice].padding}
            sx={{ height: "100%" }}
            alignItems="center"
          >
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box
                mb={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/icons/card.svg"
                  alt="card icon"
                  width={40}
                  height={40}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={34}
                  fontWeight={700}
                  color={palette.brand.default}
                  lineHeight="34px"
                  mb={4}
                >
                  Virtual card to spend in-store or online
                </Typography>
                <Typography fontSize={16} fontWeight={400} color="#5F6563">
                  Add your Exa Card to your smartphone wallet and start spending
                  in minutes. It works with Apple Wallet and Google Pay
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                height={
                  config.sections.virtualCard.layout[currentDevice].height
                }
                overflow="hidden"
                sx={{
                  paddingRight: isMobile ? 0 : 4,
                }}
              >
                <Image
                  src="/virtual-card.jpg"
                  alt="virtual card"
                  layout="responsive"
                  style={{ borderRadius: "35px" }}
                  width={500}
                  height={500}
                />
              </Box>

              <animated.div
                style={{
                  position: "absolute",
                  top: isMobile ? "85%" : "70%",
                  right: "2%",
                  width: isMobile ? "50%" : "20%",
                  aspectRatio: "1",
                  zIndex: 2,
                  opacity: (() => {
                    const progress = scrollProgress * config.pages.total;
                    return progress >= 16.5 && progress <= 22 ? 1 : 0;
                  })(),
                  transform: (() => {
                    const progress = scrollProgress * config.pages.total;
                    if (progress < 17) return "translateY(0%)";
                    if (progress > 19) return "translateY(-70%)";
                    const translateY = ((progress - 17) / 2) * -70;
                    return `translateY(${translateY}%)`;
                  })(),
                }}
              >
                <Image
                  src="/add-wallets.svg"
                  alt="add wallets"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </animated.div>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.sections.steps.offset.start}
          factor={config.sections.steps.offset.factor}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            height: "100vh",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={config.sections.steps.layout[currentDevice].padding}
            spacing={isMobile ? 2 : 4}
            alignItems="flex-start"
            justifyContent="center"
            sx={{
              minHeight: isMobile ? "auto" : "100vh",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                alignSelf: { xs: "flex-start", md: "center" },
                mb: { xs: 2, md: 4 },
              }}
              maxHeight={isMobile ? "600px" : "100vh"}
            >
              <Box textAlign="center">
                <Typography
                  fontSize={
                    config.sections.steps.layout[currentDevice].titleSize
                  }
                  fontWeight={700}
                  lineHeight="40px"
                  mb={2}
                >
                  Get your Exa Card and start using it in 4 simple steps
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} justifyContent="center">
              <Grid
                container
                justifyContent="center"
                gap={config.sections.steps.layout[currentDevice].gridSpacing}
                sx={{
                  mt: { xs: 0, md: 2 },
                }}
              >
                {steps.map((step) => (
                  <Grid item xs={12} md={2.5} key={step.id}>
                    <Box
                      sx={{
                        border: `1px solid ${palette.neutral.soft}`,
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingTop: 3,
                        maxHeight: {
                          xs: config.sections.steps.layout.mobile.cardMaxHeight,
                          md: "400px",
                        },
                      }}
                    >
                      <Box
                        minHeight={isMobile ? "20px " : "200px"}
                        alignContent="center"
                      >
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={step.id === 2 ? 120 : 180}
                          height={step.id === 2 ? 100 : 180}
                        />
                      </Box>

                      <Box sx={{ padding: 3 }}>
                        <Typography
                          fontSize={20}
                          fontWeight={600}
                          lineHeight="25px"
                          color={palette.brand.tertiary}
                        >
                          {step.id}
                        </Typography>
                        <Typography
                          fontSize={22}
                          fontWeight={700}
                          lineHeight="28px"
                          color={palette.brand.default}
                        >
                          {step.title}
                        </Typography>
                        <Typography
                          fontSize={13}
                          fontWeight={400}
                          lineHeight="18px"
                          color={palette.neutral.secondary}
                        >
                          {step.text}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={config.sections.earnings.offset.start}
          factor={config.sections.earnings.offset.factor}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "1152px",
            margin: "0 auto",
            paddingTop: "50px",
            gap: 80,
          }}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={config.sections.earnings.layout[currentDevice].padding}
            gap={config.sections.earnings.layout[currentDevice].spacing}
          >
            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column">
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].titleSize
                  }
                  fontWeight={700}
                  lineHeight="28px"
                >
                  Start earning as soon as you add funds
                </Typography>
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].subtitleSize
                  }
                >
                  Deposit your assets in the Exa App and earn APR along with
                  additional rewards.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column">
                <Image
                  src="/img/earning.jpg"
                  alt="earnings"
                  layout="responsive"
                  width={340}
                  height={300}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={config.sections.earnings.layout[currentDevice].padding}
            gap={config.sections.earnings.layout[currentDevice].spacing}
          >
            <Grid
              item
              xs={12}
              md={4}
              padding={"0 10px"}
              order={{ xs: 2, md: 1 }}
            >
              <Box display="flex" flexDirection="column">
                <Image
                  src="/img/passkeys.jpg"
                  alt="passkeys"
                  layout="responsive"
                  width={340}
                  height={300}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              padding={"0 30px"}
              order={{ xs: 1, md: 2 }}
            >
              <Box display="flex" flexDirection="column" gap="10px">
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].titleSize
                  }
                  fontWeight={700}
                  lineHeight="28px"
                >
                  Only you can access and control your assets
                </Typography>
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].subtitleSize
                  }
                >
                  No third party is able to freeze, access, or manipulate your
                  assets. They are always accessible to you, protected by a
                  device-stored passkey, providing you with a easy-to-use,
                  self-custodial wallet experience with no-hassle.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            alignItems="center"
            justifyContent="center"
            padding={config.sections.earnings.layout[currentDevice].padding}
            gap={config.sections.earnings.layout[currentDevice].spacing}
          >
            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column" gap="10px">
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].titleSize
                  }
                  fontWeight={700}
                  lineHeight="28px"
                >
                  Seamless transition between crypto and your local currency
                </Typography>
                <Typography
                  fontSize={
                    config.sections.earnings.layout[currentDevice].subtitleSize
                  }
                  fontWeight={400}
                >
                  Easily deposit and withdraw to your local currency.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} padding={"0 20px"}>
              <Box display="flex" flexDirection="column">
                <Image
                  src="/img/swaps.svg"
                  alt="swap"
                  layout="responsive"
                  width={340}
                  height={300}
                  style={{ borderRadius: "24px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 24 : 22.5}
          factor={1.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={"0 20px"}
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6} mt={2}>
              <Box textAlign="center">
                <Typography fontSize={isMobile ? 24 : 34} fontWeight={700}>
                  Exa Cards vs Alternatives
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ paddingTop: "0px !important" }}>
              <Grid container justifyContent="center" gap={1}>
                <Grid item xs={12} md={10}>
                  <Box p={2}>
                    <Grid container spacing={3}>
                      {isMobile ? (
                        <>
                          <Grid item xs={6}>
                            <TableComponent card={cards[0]} />
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            position="relative"
                            sx={{
                              paddingLeft: "0px !important",
                            }}
                          >
                            <TableComponent card={cards[currentIndex]} />
                            <Box
                              position="absolute"
                              top="15%"
                              left={0}
                              right={0}
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                              px={1}
                            >
                              <IconButton
                                onClick={() =>
                                  setCurrentIndex((prevIndex) =>
                                    prevIndex > 1
                                      ? prevIndex - 1
                                      : cards.length - 1
                                  )
                                }
                              >
                                <Image
                                  src="/icons/arrow-left.svg"
                                  alt="arrow-left"
                                  width={24}
                                  height={24}
                                />
                              </IconButton>
                              <IconButton
                                onClick={() =>
                                  setCurrentIndex((prevIndex) =>
                                    prevIndex < cards.length - 1
                                      ? prevIndex + 1
                                      : 1
                                  )
                                }
                              >
                                <Image
                                  src="/icons/arrow-right.svg"
                                  alt="arrow-right"
                                  width={24}
                                  height={24}
                                />
                              </IconButton>
                            </Box>
                          </Grid>
                        </>
                      ) : (
                        cards.map((card, index) => (
                          <Grid item xs={6} md={3} key={index}>
                            <TableComponent card={card} />
                          </Grid>
                        ))
                      )}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{
            start: isMobile ? 25.5 : 24,
            end: isMobile ? 26.5 : 25,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1152px",
            margin: "0 auto",
          }}
        >
          <Grid
            container
            padding={"0 20px"}
            spacing={4}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography
                  fontSize={28}
                  fontWeight={700}
                  lineHeight={"34px"}
                  color={palette.brand.default}
                  mb={2}
                >
                  Frequently asked questions
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={(event, isExpanded) => {
                    setExpanded(isExpanded ? index : false);
                  }}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Image
                        src="/icons/chevron.svg"
                        alt="Expand icon"
                        width={20}
                        height={20}
                      />
                    }
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography
                      fontSize={17}
                      fontWeight={600}
                      lineHeight={"23px"}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      fontSize={15}
                      lineHeight={"21px"}
                      color={palette.neutral.secondary}
                      sx={{ whiteSpace: "pre-line" }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                color="primary"
                href="https://intercom.help/exa-app/en"
                target="_blank"
                rel="noreferrer noopener"
                fullWidth
                sx={(theme) => ({
                  backgroundColor: theme.palette.brand.soft,
                  color: theme.palette.brand.default,
                  border: `none`,
                  borderRadius: "12px",
                  height: "60px",
                  "&:hover": {
                    border: `1px solid ${theme.palette.brand.default}`,
                    backgroundColor: theme.palette.brand.soft,
                  },
                })}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography fontSize={15} fontWeight={600}>
                    View all FAQs
                  </Typography>
                  <Image
                    src="/icons/arrow-out.svg"
                    alt="x icon"
                    width={20}
                    height={20}
                  />
                </Box>
              </Button>
            </Grid>
          </Grid>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{
            start: isMobile ? 27.5 : 26,
            end: isMobile ? 29 : 26.1,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            maxWidth: "1152px",
            margin: "0 auto",
            padding: "0 20px",
            marginBottom: "50px",
            height: "99vh",
          }}
        >
          <Grid
            container
            spacing={4}
            border={"1px solid #CCF3EA"}
            height={isMobile ? "1050px" : "450px"}
            ml={0}
            sx={{
              backgroundColor: "#F3FBF9",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Grid item xs={12} md={6} padding="20px">
              <Box sx={isMobile ? { textAlign: "center" } : {}}>
                <Typography
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: palette.brand.default,
                  })}
                >
                  Buy now, pay later
                </Typography>
                <Typography
                  fontSize={{ xs: 32, md: 48 }}
                  fontWeight={700}
                  sx={() => ({
                    color: palette.brand.default,
                  })}
                  mb={isMobile ? 2 : 6}
                >
                  and hold your crypto.
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                my={isMobile ? 2 : 9}
                alignItems="center"
              >
                <Grid item xs={12} md={4}>
                  <Button
                    variant="contained"
                    fullWidth
                    href="https://docs.google.com/forms/d/e/1FAIpQLSer9ldKEw9mFmImaBxkJzSBwIVY63-dJAObRlfF7zVnZk1KFQ/viewform?usp=sf_link"
                    target="_blank"
                    rel="noreferrer noopener"
                    sx={() => ({
                      backgroundColor: palette.brand.default,
                      color: palette.brand.soft,
                      borderRadius: "12px",
                      height: "60px",
                      "&:hover": {
                        backgroundColor: palette.brand.default,
                      },
                    })}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography fontSize={15} fontWeight={600}>
                        Join waitlist
                      </Typography>
                      <Image
                        src="/icons/waitlist.svg"
                        alt="waitlist icon"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://twitter.com/Exa_App"
                    target="_blank"
                    rel="noreferrer noopener"
                    fullWidth
                    sx={(theme) => ({
                      backgroundColor: theme.palette.brand.soft,
                      color: theme.palette.brand.default,
                      borderRadius: "12px",
                      height: "60px",
                      "&:hover": {
                        backgroundColor: theme.palette.brand.soft,
                      },
                    })}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography fontSize={15} fontWeight={600}>
                        Follow us
                      </Typography>
                      <Image
                        src="/icons/x.svg"
                        alt="x icon"
                        width={20}
                        height={20}
                      />
                    </Box>
                  </Button>
                </Grid>
              </Grid>
              <Box
                display="flex"
                gap={3}
                sx={isMobile ? { justifyContent: "center" } : {}}
              >
                <Image
                  src="/footer/visa.svg"
                  alt="visa logo"
                  width={60}
                  height={24}
                />
                <Image
                  src="/footer/apple-pay.svg"
                  alt="apple pay"
                  width={60}
                  height={24}
                />
                <Image
                  src="/footer/google-pay.svg"
                  alt="google pay"
                  width={60}
                  height={24}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ margin: "0 auto" }}>
              <Box>
                <Image
                  src="/phone-hand.png"
                  alt="phone hand"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            mt={4}
            mb={4}
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={12} md={4} gap={1}>
              <Box>
                <Image
                  src="/footer/exa-app.svg"
                  alt="exa app logo"
                  width={168}
                  height={32}
                />
              </Box>
              <Box>
                <Link
                  href="https://exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Powered by Exactly Protocol
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: { xs: "start", md: "end" },
                textAlign: "center",
              }}
              gap={1}
            >
              <Box>
                <Link href={"/t&c"}>
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Terms & Conditions
                  </Typography>
                </Link>
              </Box>
              <Box>
                <Typography fontSize={12} color={palette.neutral.secondary}>
                  Privacy Policy
                </Typography>
              </Box>
              <Box>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Typography
                    component="span"
                    fontSize={12}
                    color={palette.neutral.secondary}
                  >
                    Documentation
                  </Typography>
                </Link>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: { xs: "start", md: "end" },
                textAlign: "center",
              }}
              gap={1}
            >
              {/* <Box
                display="flex"
                gap={3}
                sx={isMobile && { justifyContent: "center" }}
              >
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/x-logo.svg"
                    alt="x logo"
                    width={60}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/discord.svg"
                    alt="discord logo"
                    width={60}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://docs.exact.ly/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/footer/telegram.svg"
                    alt="telegram logo"
                    width={60}
                    height={24}
                  />
                </Link>
              </Box> */}
              <Box>
                <Typography fontSize={12} color={palette.neutral.secondary}>
                  {`  © ${new Date().getFullYear()} Exa Labs SAS. All rights reserved.`}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default NewLandingPage;
