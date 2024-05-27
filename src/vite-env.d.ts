/// <reference types="vite/client" />


export type BookSearch = {
    kind:       string;
    totalItems: number;
    items:      Item[];
}

export type Item = {
    kind:        Kind;
    id:          string;
    etag:        string;
    selfLink:    string;
    volumeInfo:  VolumeInfo;
    saleInfo:    SaleInfo;
    accessInfo:  AccessInfo;
    searchInfo?: SearchInfo;
}

export type AccessInfo = {
    country:                Country;
    viewability:            Viewability;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: TextToSpeechPermission;
    epub:                   Epub;
    pdf:                    Epub;
    webReaderLink:          string;
    accessViewStatus:       AccessViewStatus;
    quoteSharingAllowed:    boolean;
}

export enum AccessViewStatus {
    None = "NONE",
    Sample = "SAMPLE",
}

export enum Country {
    Ar = "AR",
}

export type Epub = {
    isAvailable:   boolean;
    acsTokenLink?: string;
}

export enum TextToSpeechPermission {
    Allowed = "ALLOWED",
}

export enum Viewability {
    NoPages = "NO_PAGES",
    Partial = "PARTIAL",
}

export enum Kind {
    BooksVolume = "books#volume",
}

export type SaleInfo = {
    country:      Country;
    saleability:  Saleability;
    isEbook:      boolean;
    listPrice?:   SaleInfoListPrice;
    retailPrice?: SaleInfoListPrice;
    buyLink?:     string;
    offers?:      Offer[];
}

export type SaleInfoListPrice = {
    amount:       number;
    currencyCode: string;
}

export type Offer = {
    finskyOfferType: number;
    listPrice:       OfferListPrice;
    retailPrice:     OfferListPrice;
}

export type OfferListPrice = {
    amountInMicros: number;
    currencyCode:   string;
}

export enum Saleability {
    ForSale = "FOR_SALE",
    NotForSale = "NOT_FOR_SALE",
}

export type SearchInfo = {
    textSnippet: string;
}

export type VolumeInfo = {
    title:               string;
    subtitle?:           string;
    authors:             string[];
    publisher?:          string;
    publishedDate:       string;
    description?:        string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes:        ReadingModes;
    pageCount?:          number;
    printType:           PrintType;
    categories?:         string[];
    averageRating?:      number;
    ratingsCount?:       number;
    maturityRating:      MaturityRating;
    allowAnonLogging:    boolean;
    contentVersion:      string;
    panelizationSummary: PanelizationSummary;
    imageLinks?:         ImageLinks;
    language:            Language;
    previewLink:         string;
    infoLink:            string;
    canonicalVolumeLink: string;
}

export type ImageLinks = {
    smallThumbnail: string;
    thumbnail:      string;
}

export type IndustryIdentifier = {
    type:       Type;
    identifier: string;
}

export enum Type {
    Isbn10 = "ISBN_10",
    Isbn13 = "ISBN_13",
}

export enum Language {
    En = "en",
    Es = "es",
    PtBR = "pt-BR",
}

export enum MaturityRating {
    NotMature = "NOT_MATURE",
}

export type PanelizationSummary = {
    containsEpubBubbles:  boolean;
    containsImageBubbles: boolean;
}

export enum PrintType {
    Book = "BOOK",
}

export type ReadingModes = {
    text:  boolean;
    image: boolean;
}
