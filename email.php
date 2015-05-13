<?php

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

require 'phpmailer/PHPMailerAutoload.php';

$email = $_POST['email'];
$checkbox = $_POST['checkbox'];
$checked = '';
    if(empty($checkbox)) 
        {
            $checked = 'Ничего не хочет';
        }
    else
        {
            $N = count($checkbox);
            for($i=0; $i < $N; $i++)
            {
              $checked .= '<li>'.$checkbox[$i].'</li>';
            }
        }

$message = <<<EOD

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Новая заявка</title>
    </head>
    <body leftmargin="20" marginwidth="20" topmargin="20" marginheight="20" offset="0"
          style="margin: 20;padding: 20;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;
          background-color: #fff;height: 100% !important;width: 100% !important;">
    
    Email: $email<br><br>
    
    Что хочет:<br>
    <ul>
        $checked
    </ul>
        
    </body>
</html>

EOD;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'delovitarf@yandex.ru';                 // SMTP username
$mail->Password = 'frdelov';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->CharSet = 'UTF-8';

$mail->From = 'delovitarf@yandex.ru';
$mail->FromName = 'Delovita';
$mail->addAddress('desir.web@gmail.com');              // Name is optional
$mail->addReplyTo('delovitarf@yandex.ru', 'Delovita');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Delovita';
$mail->Body    = $message;

$mail->setLanguage('ru', '/language/');

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

exit;

?>