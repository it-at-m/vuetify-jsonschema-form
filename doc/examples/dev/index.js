import resolvedSchema from './_resolved-schema'
import selectFilledDeps from './_select-filled-deps'
import prefilledSelect from './_prefilled-select'
import selectFilledHttp from './_select-filled-http'
import readOnlySelectIcon from './_readonly-select-icon'
import ValidationExtraCases from './_validation-extra-cases'
import WrongTypes from './_wrong-types'
import LargeForm from './_large-form'
import SimpleArrayValidation from './_simple-array-validation'
import NestedAllofOneof from './_nested_allof_oneof'
import PrefilledArrayWrongType from './_prefilled_array_wrong_type'
import PrefilledArrayDependency from './_prefilled_array_dependency'
import WrongEnumValue from './_wrong-enum-value'
import EnumConst from './_enum_const'
import Separator from './_separator'
import InfiniteLoop from './_infinite_loop'
import ArrayRichExpression from './_array_rich_expression'
import ArrayOneOfTitle from './_array_oneof_title'
import ReadonlyOptions from './_readonly-options'
import StringDefault from './_string_default'
import CalculatedValue from './_calculated-value'

const examplesGroup = {
  title: 'Development',
  color: 'primary',
  examples: [
    resolvedSchema,
    selectFilledDeps,
    selectFilledHttp,
    prefilledSelect,
    readOnlySelectIcon,
    ValidationExtraCases,
    WrongTypes,
    LargeForm,
    SimpleArrayValidation,
    NestedAllofOneof,
    PrefilledArrayWrongType,
    PrefilledArrayDependency,
    WrongEnumValue,
    EnumConst,
    Separator,
    InfiniteLoop,
    ArrayRichExpression,
    ArrayOneOfTitle,
    ReadonlyOptions,
    StringDefault,
    CalculatedValue
  ]
}

export default examplesGroup
