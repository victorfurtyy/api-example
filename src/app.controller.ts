import { Controller, Get, Post, Body } from '@nestjs/common';
import { SumDto, SumResponseDto, RandomPhraseResponseDto } from './dto/api.dto';

@Controller()
export class AppController {
  
  private readonly randomPhrases = [
    'A vida é como uma caixa de chocolates, você nunca sabe o que vai encontrar.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'Acredite em si mesmo e tudo será possível.',
    'Seja a mudança que você quer ver no mundo.',
    'O único impossível é aquilo que você não tenta.',
    'Cada novo dia é uma nova oportunidade para ser feliz.',
    'A jornada de mil milhas começa com um único passo.',
    'Não espere por oportunidades, crie-as.',
    'O conhecimento é poder, mas o conhecimento aplicado é sabedoria.',
    'Seja gentil, pois todos que você encontra estão lutando uma batalha difícil.'
  ];

  @Get('random-phrase')
  getRandomPhrase(): RandomPhraseResponseDto {
    const randomIndex = Math.floor(Math.random() * this.randomPhrases.length);
    const phrase = this.randomPhrases[randomIndex];
    
    return { phrase };
  }

  @Post('sum')
  calculateSum(@Body() sumDto: SumDto): SumResponseDto {
    const result = sumDto.a + sumDto.b;
    return { result };
  }
}