export interface BookObj {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export interface SearchInfo {
    textSnippet: string;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Epub;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface Epub {
    isAvailable: boolean;
    acsTokenLink: string;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: ListPrice;
    retailPrice: ListPrice;
    buyLink: string;
    offers: Offer[];
}

export interface Offer {
    finskyOfferType: number;
    listPrice: ListPrice2;
    retailPrice: ListPrice2;
}

export interface ListPrice2 {
    amountInMicros: number;
    currencyCode: string;
}

export interface ListPrice {
    amount: number;
    currencyCode: string;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface IndustryIdentifier {
    type: string;
    identifier: string;
}