function telephoneCheck(str) {

if (str.match(/^\((\d{3})\)\1/))
{
  return true;
}
  return str.search(/^[02(-]/) == -1 && str.match(/\(/)?.length == str.match(/\)/)?.length && str.replace(/[-()\s]/g, '').search(/\D/) == -1 && str.replace(/[-()\s]/g, '').length >= 10 && str.replace(/[-()\s]/g, '').length <=11

}

telephoneCheck("10 (757) 622-7382");

