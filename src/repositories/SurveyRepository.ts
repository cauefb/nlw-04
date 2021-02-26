import { EntityRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import { Survey } from "../models/Survey";

@EntityRepository(Survey)
class SurveyRepository extends Repository<Survey>{ }

export { SurveyRepository }