import { Tabs, Tab, Paper } from "@mui/material";
import { useState, useEffect, ReactElement } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { PATHS_DATA } from "../../../assets/data";
import { IMAGES } from "../../../constants";
import { LeftFooter } from "../Footers";

export function LeftLayout() {
  const [value, setValue] = useState<number>(0);
  const handleChange = (e: any, newValue: number) => {
    setValue(newValue);
  };
  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    const index = PATHS_DATA.findIndex((item) => item.path === path);
    setValue(index);
  }, [router]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Image
        width={250}
        height={180}
        onClick={() => router.push("/")}
        src={IMAGES.logo}
        objectFit="cover"
        alt="CodeEsi Logo"
        className="cursor-pointer"
      />
      <Paper elevation={3} className="w-10/12">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          orientation="vertical"
          className="w-full"
        >
          {PATHS_DATA.map((path) => (
            <Tab
              style={{
                display: "flex",
                flexDirection: "row",
                padding: 0,
                maxHeight: 48,
                minHeight: 48,
                justifyContent: "flex-start",
              }}
              icon={<path.icon size={24} className="mx-5" />}
              label={path.title}
              key={path.id}
              onClick={() => router.push(path.path)}
            />
          ))}
        </Tabs>
      </Paper>
      <LeftFooter />
    </div>
  );
}
