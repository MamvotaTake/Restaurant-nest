import { Model } from "mongoose";
import { AbstractDocument } from "./abstract.schema";
import { Logger } from "@nestjs/common";

export abstract class AbstractRepository<TDocument extends AbstractDocument>{
    protected abstract readonly logger: Logger
    constructor(protected readonly model:Model<TDocument>){}
}