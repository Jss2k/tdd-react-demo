import { useState, useEffect } from 'react'
import { rubToUsd, usdToRub } from './../../domain/converter'

export function useConverter(initialRubValue, course) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course)
  const [rub, setRub] = useState(initialRubValue)
  const [usd, setUsd] = useState(calculatedUsdAmount)

  useEffect(() => {
    setRub(initialRubValue)
    setUsd(rubToUsd(initialRubValue, course))
  }, [initialRubValue, course])

  function createUpdater(direction) {
    const isFormRub = direction === 'rub-usd'
    const convert = isFormRub ? rubToUsd : usdToRub
    const setOriginal = isFormRub ? setRub : setUsd
    const setTarget = isFormRub ? setUsd : setRub

    return function update(value) {
      const original = Number(value)
      const target = convert(original, course)

      setOriginal(original)
      setTarget(target)
    }
  }

  const updateRub = createUpdater('rub-usd')
  const updateUsd = createUpdater('usd-rub')

  // function updateRub(value) {
  //   const rub = Number(value)
  //   const usd = rubToUsd(rub, course)

  //   setRub(rub)
  //   setUsd(usd)
  // }

  // function updateUsd(value) {
  //   const usd = Number(value)
  //   const rub = usdToRub(usd, course)

  //   setRub(rub)
  //   setUsd(usd)
  // }

  return {
    rub,
    usd,
    updateRub,
    updateUsd,
  }
}