/// <reference types="vite/client" />




//BOOK SEARCH TYPE
export type BookSearch = {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export type Doc = {
    author_key?:              string[];
    author_name?:             string[];
    cover_edition_key?:       string;
    cover_i?:                 number;
    ddc?:                     string[];
    ebook_access:             EbookAccess;
    ebook_count_i:            number;
    edition_count:            number;
    edition_key:              string[];
    first_publish_year?:      number;
    format?:                  string[];
    has_fulltext:             boolean;
    isbn?:                    string[];
    key:                      string;
    language?:                Language[];
    last_modified_i:          number;
    lcc?:                     string[];
    lccn?:                    string[];
    number_of_pages_median?:  number;
    oclc?:                    string[];
    osp_count?:               number;
    public_scan_b:            boolean;
    publish_date?:            string[];
    publish_place?:           string[];
    publish_year?:            number[];
    publisher?:               string[];
    seed:                     string[];
    title:                    string;
    title_suggest:            string;
    title_sort:               string;
    type:                     Type;
    id_goodreads?:            string[];
    subject?:                 string[];
    place?:                   string[];
    time?:                    string[];
    person?:                  string[];
    publisher_facet?:         string[];
    person_key?:              string[];
    time_facet?:              string[];
    place_key?:               string[];
    person_facet?:            string[];
    subject_facet?:           string[];
    _version_:                number;
    place_facet?:             string[];
    lcc_sort?:                string;
    author_facet?:            string[];
    subject_key?:             string[];
    ddc_sort?:                string;
    time_key?:                string[];
    contributor?:             string[];
    subtitle?:                string;
    first_sentence?:          string[];
    id_librarything?:         string[];
    id_amazon?:               string[];
    id_better_world_books?:   string[];
    readinglog_count?:        number;
    want_to_read_count?:      number;
    currently_reading_count?: number;
    already_read_count?:      number;
    ia?:                      string[];
    ia_collection?:           string[];
    ia_collection_s?:         string;
    lending_edition_s?:       string;
    lending_identifier_s?:    string;
    author_alternative_name?: string[];
    ratings_count_1?:         number;
    ratings_count_2?:         number;
    ratings_count_3?:         number;
    ratings_count_4?:         number;
    ratings_count_5?:         number;
    ratings_average?:         number;
    ratings_sortable?:        number;
    ratings_count?:           number;
    printdisabled_s?:         string;
}

export enum EbookAccess {
    Borrowable = "borrowable",
    NoEbook = "no_ebook",
    Public = "public",
}

export enum Language {
    Eng = "eng",
    Und = "und",
}

export enum Type {
    Work = "work",
}


