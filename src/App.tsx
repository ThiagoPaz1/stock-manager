import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { increment, decrement, incrementByAmount } from "./store/slices/counterSlice";
import { StyledContainer } from './styles';

export function App() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const { t, i18n } = useTranslation()
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Troca o idioma
  };

  return (
    <>
      <StyledContainer>
        <h1>{t("start")}</h1>
      </StyledContainer>
     <button onClick={() => changeLanguage("en")}>English</button>
     <button onClick={() => changeLanguage("pt")}>Português</button>
     <p>Contador: {count}</p>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Incrementar +5</button>
    </>
  )
}