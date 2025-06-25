import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    price: number

}
