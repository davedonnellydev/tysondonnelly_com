import React from "react";
import styles from "./styles/gallery.module.css";

export default function Film_Gallery() {
  interface Film {
    title: string;
    img_url: string;
    alt: string;
  }

  /* ADD NEW FILMS

First, add the film's poster image to the public/films folder.

Then add the new film's info as an object to the top of the film list array below (film_list) and it will appear in the order they're listed in the array. You should format the object as follows:

    {
      title: "TITLE HERE",
      img_url: "./films/filename.jpg",
      alt: "IMAGE DESCRIPTION",
    },

 */

  const film_list: Film[] = [
    {
      title: "SINNERS",
      img_url: "./films/sinners.jpg",
      alt: "SINNERS",
    },
    {
      title: "FURIOSA",
      img_url: "./films/furiosa.jpg",
      alt: "FURIOSA",
    },
    {
      title: "D&D: Honor Among Thieves",
      img_url: "./films/dnd_honor_among_thieves.jpeg",
      alt: "D&amp;D: Honor Among Thieves",
    },
    {
      title: "MATRIX RESURRECTIONS",
      img_url: "./films/matrix_resurrections.jpg",
      alt: "MATRIX RESURRECTIONS",
    },
    {
      title: "GODMOTHERED",
      img_url: "./films/godmothered.jpg",
      alt: "GODMOTHERED",
    },
    {
      title: "THE LETTER FOR THE KING",
      img_url: "./films/letter_for_the_king.jpg",
      alt: "THE LETTER FOR THE KING",
    },
    {
      title: "ALADDIN",
      img_url: "./films/aladdin.jpg",
      alt: "ALADDIN",
    },
    {
      title: "THE NUTCRACKER AND THE FOUR REALMS",
      img_url: "./films/nutcracker.jpg",
      alt: "THE NUTCRACKER AND THE FOUR REALMS",
    },
    {
      title: "A WRINKLE IN TIME",
      img_url: "./films/a_wrinkle_in_time.jpg",
      alt: "A WRINKLE IN TIME",
    },
    {
      title: "STAR WARS: THE LAST JEDI",
      img_url: "./films/star_wars.jpg",
      alt: "STAR WARS: THE LAST JEDI",
    },
    {
      title: "KING ARTHUR: LEGEND OF THE SWORD",
      img_url: "./films/king_arthur.jpg",
      alt: "KING ARTHUR: LEGEND OF THE SWORD",
    },
    {
      title: "ASSASSIN'S CREED",
      img_url: "./films/assassins_creed.jpg",
      alt: "ASSASSIN'S CREED",
    },
    {
      title: "AVENGERS: AGE OF ULTRON",
      img_url: "./films/avengers_age_of_ultron.jpg",
      alt: "AVENGERS: AGE OF ULTRON",
    },
    {
      title: "ALLEGIANT",
      img_url: "./films/allegient.jpg",
      alt: "ALLEGIANT",
    },
    {
      title: "INSURGENT",
      img_url: "./films/insurgent.png",
      alt: "INSURGENT",
    },
    {
      title: "HUNGER GAMES: CATCHING FIRE",
      img_url: "./films/hunger_games.png",
      alt: "HUNGER GAMES: CATCHING FIRE",
    },
    {
      title: "IRON MAN 3",
      img_url: "./films/iron_man_3.jpg",
      alt: "IRON MAN 3",
    },
    {
      title: "THE LEGO MOVIE",
      img_url: "./films/the_lego_movie.png",
      alt: "THE LEGO MOVIE",
    },
    {
      title: "THE AVENGERS",
      img_url: "./films/avengers.jpg",
      alt: "THE AVENGERS",
    },
    {
      title: "UNBROKEN",
      img_url: "./films/unbroken.png",
      alt: "UNBROKEN",
    },
    {
      title: "X-MEN: DAYS OF FUTURE PAST",
      img_url: "./films/xmen.jpg",
      alt: "X-MEN: DAYS OF FUTURE PAST",
    },
    {
      title: "TVC",
      img_url: "./films/TVC.jpg",
      alt: "TVC",
    },
  ];
  let count = 0;

  return (
    <div className={styles.gallery}>
      {film_list.map((film, key) => {
        count += 1;
        if (count > 3) {
          count = 1;
        }
        return (
          <div
            key={key}
            className={styles.galleryTile}
            style={{ gridColumnStart: count, gridColumnEnd: count + 1 }}
          >
            <div className={styles.imgContainer}>
              <img
                className={styles.filmImg}
                alt={film.alt}
                src={film.img_url}
              />
            </div>
            <p className={styles.filmTitle}>{film.title}</p>
          </div>
        );
      })}
    </div>
  );
}
