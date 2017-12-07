CREATE TABLE beers (
    id integer NOT NULL,
    name character varying(80),
    url character varying(120),
    imageUrl character varying(120)
);
CREATE SEQUENCE beers_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE beers_id_seq OWNED BY beers.id;
ALTER TABLE ONLY beers ALTER COLUMN id SET DEFAULT nextval('beers_id_seq'::regclass);
ALTER TABLE ONLY beers ADD CONSTRAINT beers_pkey PRIMARY KEY (id);


CREATE TABLE voters (
    id integer NOT NULL,
    name character varying(80)
);
CREATE SEQUENCE voters_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE voters_id_seq OWNED BY voters.id;
ALTER TABLE ONLY voters ALTER COLUMN id SET DEFAULT nextval('voters_id_seq'::regclass);
ALTER TABLE ONLY voters ADD CONSTRAINT voters_pkey PRIMARY KEY (id);


CREATE TABLE votes (
    id integer NOT NULL,
    beer_id integer,
    voter_id integer,
    rating integer,
    motivation character varying(240)
);
CREATE SEQUENCE votes_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE votes_id_seq OWNED BY votes.id;
ALTER TABLE ONLY votes ALTER COLUMN id SET DEFAULT nextval('votes_id_seq'::regclass);
ALTER TABLE ONLY votes ADD CONSTRAINT votes_pkey PRIMARY KEY (id);
