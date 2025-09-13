import { IsNumber } from 'class-validator';

export class SumDto {
  @IsNumber()
  a: number;

  @IsNumber()
  b: number;
}

export class SumResponseDto {
  result: number;
}

export class RandomPhraseResponseDto {
  phrase: string;
}