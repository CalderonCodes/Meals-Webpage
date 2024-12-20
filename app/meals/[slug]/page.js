import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'

function Meal({params}) {
  const meal = getMeal(params.slug)

  
  if(!meal){
    notFound();
  }
  const instructions = meal.instructions
    .trim()
    .split(/\n+/)
    .filter((line) => line)
    .map((line, index) => {
      const stepMatch = line.match(/^\d+\.\s*(.+)/); // Match "1. " or similar
      const content = stepMatch ? stepMatch[1] : line;
      return { step: index + 1, content };
    });

  return (
    <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image fill src={meal.image} alt={meal.title}/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto: ${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={classes.summary}>
          {meal.summary}
        </p>
      </div>
    </header>
    <main>
    <ul className={classes.instructions}>
          {instructions.map(({ step, content }) => (
            <li key={step} className={classes.step}>
              <div className={classes.stepNumber}>{step}</div>
              <p>{content}</p>
            </li>
          ))}
        </ul>
    </main>
    </>
  )
}

export default Meal