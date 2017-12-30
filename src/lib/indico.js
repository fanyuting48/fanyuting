import $ from 'jquery';

export const political = (text) =>{
  return $.post(
  'https://apiv2.indico.io/political',
  JSON.stringify({
    'api_key': "91c453eca528a19b179caec4f1be6a7b",
    'data': `${text}`,
    'threshold': 0.25
  })
)
}
