"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export function SectionCards() {
  return (
    <div className=" mt-8 lg:px-8 px-4 !flex !flex-wrap w-full justify-between">
      <Card className="@container/card lg:max-w-[24%] w-full my-3 border-[#0d3486]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Card>
      <Card className="@container/card lg:max-w-[24%] w-full my-3 border-[#0d3486]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2800,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Card>
      <Card className="@container/card lg:max-w-[24%] w-full my-3 border-[#0d3486]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3300,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Card>
      <Card className="@container/card lg:max-w-[24%] w-full my-3 border-[#0d3486]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
            <CarouselItem>
              <>
                <CardHeader>
                  <CardDescription>Recent Proposals</CardDescription>
                  <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    12 hours ago
                  </CardTitle>
                  <CardAction>
                    <Badge
                      variant="outline"
                      className="bg-[#0d3486] text-white"
                    >
                      <IconTrendingUp />
                      +12.5%
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                  <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <IconTrendingUp className="size-4" />
                  </div>
                  <div className="text-muted-foreground">
                    Visitors for the last 6 months
                  </div>
                </CardFooter>
              </>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </Card>
    </div>
  );
}
