import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsArray, ArrayNotEmpty, IsOptional, IsDate, IsNumber, IsDateString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    @IsOptional()
    items: string[];

    @ApiProperty({ default: 'proccessing' })
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    @IsOptional()
    promotions: string[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    date: Date;
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    payment: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    fee: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    net: number;
}
export class UpdateOrderDto extends PartialType(CreateOrderDto) { }

class StripeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description: string

}

export class CreateStripeDto extends StripeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    orderId: string;
}

export class CreateStripe extends StripeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    payment_method: string
}


