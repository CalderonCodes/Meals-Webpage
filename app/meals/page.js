import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import { Suspense } from "react";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";


async function LoadMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          {" "}
          Delicious meals, created{" "}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <LoadMeals />
        </Suspense>
      </main>
    </>
  );
}

export default Meals;
