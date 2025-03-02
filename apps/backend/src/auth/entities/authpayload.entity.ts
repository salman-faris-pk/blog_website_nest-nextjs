import {Field,ID,ObjectType} from "@nestjs/graphql"


@ObjectType()
export class AuthPayload {
   
    @Field(()=> ID)
    id: string;

    @Field()
    name:string;

    @Field({ nullable: true })
    avatar?: string;

    @Field()
    accessToken: string;
}