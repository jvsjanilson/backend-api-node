import { IsNotEmpty, IsPositive, Length } from "class-validator";

export default class ProdutoCreateDto {

  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  @IsNotEmpty()
  @IsPositive()
  price: number;

}
