import { LightningElement, api } from "lwc";

export default class Oportunidade extends LightningElement {
 @api nome;
 @api conta;
 @api valor;
 @api fechamento;
 }