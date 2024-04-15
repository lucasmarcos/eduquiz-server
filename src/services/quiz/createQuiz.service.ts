import type { CreateQuizDto } from "../../dtos/createQuizDto.js";

import { clientDataBase } from "../../database/clientDataBase.js";

export const createQuizService = async (data: CreateQuizDto) => {
  try {
    const savedQuiz = await clientDataBase.quiz.create({
      data: {
        nome: data.titulo,
        description: data.descricao,
      },
    });

    for (const p of data.perguntas) {
      await clientDataBase.pergunta.update({
        data: {
          quizId: savedQuiz.id,
        },
        where: { id: p },
      });
    }

    return { quiz: savedQuiz };
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};
