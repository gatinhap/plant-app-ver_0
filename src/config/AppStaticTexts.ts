const AppStaticTexts = {
  COMPONENTS: {
    LOGOUT: {
      LOGOUT_IS_ERROR:
        'Nastąpił błąd podczas wylogowywania. Odśwież stronę i spróbuj jeszcze raz.',
      LOGOUT_IS_PENDING: 'Wylogowuję...',
      LOGOUT_IS_SUCCESS: 'Użytkownik wylogowany!',
      LOGOUT_BUTTON_TEXT: 'Wyloguj',
    },
    PLANT_FORM: {
      ADD_NEW_PLANT_FORM: {
        ADD_ACTION_IS_ERROR:
          'Nastąpił błąd podczas dodawania roślinki. Odśwież stronę i spróbuj jeszcze raz.',
        ADD_ACTION_IS_PENDING: 'Dodaję...',
        ADD_ACTION_IS_SUCCESS: 'Roślinka dodana do kolekcji!',
        SUBMIT_BUTTON: 'zapisz zmiany',
      },
      EDIT_PLANT_FORM: {
        RETRIEVING_DATA_IS_PENDING: 'Pobieram dane...',
        RETRIEVING_DATA_IS_ERROR:
          'Nie udało się pobrać danych z serwera. Odśwież stronę i spróbuj jeszcze raz.',
        UPDATE_ACTION_IS_ERROR:
          'Nastąpił błąd podczas aktualizowania danych. Odśwież stronę i spróbuj jeszcze raz.',
        UPDATE_ACTION_IS_PENDING: 'Zapisuję...',
        UPDATE_ACTION_IS_SUCCESS: 'Zmiany zostały zapisane!',
        SUBMIT_BUTTON: 'zapisz',
      },
      FORM_FIELDS: {
        MAX_LENGTH_TEXTAREA: 'Opis może zawierać maksymalnie 512 znaków!',
        PLANT_NAME: {
          NAME_REQUIRED: 'Dodaj nazwę roślinki!',
          NAME_MAXLENGTH: 'Nazwa roślinki może zawierać maksymalnie 20 znaków!',
          ADD_FORM_LABEL_TEXT: 'podaj nazwę roślinki',
          EDIT_FORM_LABEL_TEXT: 'nazwa roślinki',
          FIELD_PLACEHOLDER: 'nazywam się...',
        },
        PLANT_WATERING: {
          ADD_FORM_LABEL_TEXT: 'jak chcesz ją podlewać',
          EDIT_FORM_LABEL_TEXT: 'podlewanie',
          FIELD_PLACEHOLDER: 'wpisz jak bardzo lubię wodę...',
        },
        PLANT_MISTING: {
          ADD_FORM_LABEL_TEXT: 'czy lubi zraszanie',
          EDIT_FORM_LABEL_TEXT: 'zraszanie',
          FIELD_PLACEHOLDER:
            'niektóre z nas to uwielbiają, a inne nie mogą znieść, a ja...',
        },
        PLANT_LIGHT: {
          ADD_FORM_LABEL_TEXT: 'światło - dużo czy mało',
          EDIT_FORM_LABEL_TEXT: 'światło',
          FIELD_PLACEHOLDER: 'słońce, słoneczko utrzymuje mnie przy życiu...',
        },
        PLANT_SOIL: {
          ADD_FORM_LABEL_TEXT: 'ulubiona gleba',
          EDIT_FORM_LABEL_TEXT: 'gleba',
          FIELD_PLACEHOLDER:
            'uniwersalna, a może bigosik, hmm, ja najbardziej lubię...',
        },
        PLANT_FERTILIZATION: {
          ADD_FORM_LABEL_TEXT: 'najlepszy nawóz',
          EDIT_FORM_LABEL_TEXT: 'nawożenie',
          FIELD_PLACEHOLDER: 'witaminki dla roślinki, a moje ulubione to...',
        },
      },
    },
    USER_FORM: {
      LOGIN_FORM: {
        LOGIN_IS_SUCCESS: 'Użytkownik zalogowany!',
        LOGIN_IS_ERROR:
          'Nastąpił błąd podczas logowania. Odśwież stronę i spróbuj jeszcze raz.',
        EMAIL_LABEL_TEXT: 'email podany przy logowaniu',
        EMAIL_PLACEHOLDER: 'mój email to...',
        PASSWORD_LABEL_TEXT: 'Twoje hasło',
        PASSWORD_PLACEHOLDER: 'moje hasło...',
        LOGIN_BUTTON: 'Zaloguj się',
      },
      REGISTRATION_FORM: {
        ADD_USER_IS_SUCCESS: 'Rejestracja przebiegła pomyślnie!',
        ADD_USER_IS_PENDING: 'Dodaję...',
        ADD_USER_IS_ERROR:
          'Wystąpił błąd podczas rejestracji. Spróbuj ponownie.',
        CREATE_USER_BUTTON: 'stwórz konto',
        USERNAME: {
          USERNAME_LABEL: 'nazwa użytkownika',
          USERNAME_PLACEHOLDER: 'mów na mnie...',
          USERNAME_REQUIRED: 'Podaj nazwę użytkownika!',
          USERNAME_MAXLENGTH:
            'Nazwa użytkownika może zawierać maksymalnie 30 znaków!',
        },
        USER_EMAIL: {
          EMAIL_LABEL: 'email',
          EMAIL_PLACEHOLDER: 'mój email to...',
          EMAIL_REQUIRED: 'Podaj swój email!',
          EMAIL_WRONG_PATTERN: 'Niewłaściwy format maila!',
        },
        USER_PASSWORD: {
          PASSWORD_LABEL: 'hasło',
          PASSWORD_PLACEHOLDER: 'moje hasło...',
          PASSWORD_REQUIRED: 'Hasło jest wymagane',
          PASSWORD_MAXLENGTH: 'Hasło nie może przekroczyć 20 znaków!',
          PASSWORD_MINLENGTH: 'Hasło musi zawierać co najmniej 8 znaków!',
        },
        USER_PASSWORD_REPEAT: {
          PASSWORD_LABEL: 'powtórz hasło',
          PASSWORD_PLACEHOLDER: 'moje hasło...',
          PASSWORD_REQUIRED: 'Powtórzenie hasła jest wymagane!',
          PASSWORD_NOT_MATCHING: 'Hasła nie pasują do siebie',
        },
      },
    },
    PLANT_COLLECTION: {
      PLANT_DATA_DISPLAY_IS_PENDING: 'Pobieram dane...',
      PLANT_DATA_DISPLAY_IS_ERROR:
        'Nie udało się pobrać listy roślinek. Spróbuj odświeżyć stronę.',
    },
  },
  PAGES: {
    ADD_NEW_PLANT: {
      NAV_ITEM: 'moja kolekcja',
      ADD_PLANT_HEADING: 'dodaj roślinkę',
    },
  },
};

export default AppStaticTexts;
