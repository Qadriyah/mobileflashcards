import * as types from "../constants/deck";

const initialState = {
  requesting: false,
  success: false,
  error: null,
  decks: {},
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_DECK_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.SAVE_DECK_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.SAVE_DECK_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: { ...state.decks, ...action.payload },
      };

    case types.GET_DECKS_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.GET_DECKS_REQUEST:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.GET_DECKS_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: action.payload,
      };

    case types.SAVE_CARD_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.SAVE_CARD_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.SAVE_CARD_SUCCESS:
      const { deckId, card } = action.payload;
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: {
          ...state.decks,
          [deckId]: {
            ...state.decks[deckId],
            questions: [...state.decks[deckId].questions, ...[card]],
          },
        },
      };

    case types.MARK_GUESS_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.MARK_GUESS_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.MARK_GUESS_SUCCESS:
      const { deckId: id, card: answeredQuestion } = action.payload;
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: {
          ...state.decks,
          [id]: {
            ...state.decks[id],
            questions: state.decks[id].questions.map((question) => {
              if (question.id === answeredQuestion.id) {
                question = { ...answeredQuestion };
                return question;
              }
              return question;
            }),
          },
        },
      };

    case types.UNMARK_QUESTION_REQUEST:
      return {
        ...state,
        requesting: true,
      };

    case types.UNMARK_QUESTION_FAILED:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };

    case types.UNMARK_QUESTION_SUCCESS:
      const { deck } = action.payload;
      return {
        ...state,
        requesting: false,
        success: true,
        error: null,
        decks: {
          ...state.decks,
          [deck.id]: {
            ...state.decks[deck.id],
            ...deck,
          },
        },
      };

    default:
      return state;
  }
};

export default deckReducer;
