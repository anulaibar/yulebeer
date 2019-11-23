CREATE TABLE beers (
    id SERIAL PRIMARY KEY,
    name character varying(256),
    url character varying(2048),
    imageUrl character varying(2048),
    description character varying(2048)
);


CREATE TABLE voters (
    id SERIAL PRIMARY KEY,
    name character varying(128)
);


CREATE TABLE votes (
    id SERIAL PRIMARY KEY,
    beer_id integer,
    voter_id integer,
    rating integer,
    motivation character varying(1024)
);
