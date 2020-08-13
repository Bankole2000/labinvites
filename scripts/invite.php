<?php 
session_start();
use PHPMailer\PHPMailer\PHPMailer; 
use PHPMailer\PHPMailer\Exception; 

require '../vendor/autoload.php';

  if (isset($_POST["action"])) 
  {
    require_once('connect.php');

    if($_POST["action"] == "sendSingleInvite") 
    {
    $sender = $_POST['sender'];
    $toEmail = $_POST['singleTo'];
    // $ccEmail = $_POST[''];
    // $bccEmail = $_POST[''];
    include_once "../vendor/phpmailer/phpmailer/src/PHPMailer.php";
    $mail = new PHPMailer(true);
    try {
      $mail->IsSMTP();
    $mail->SMTPAuth = true;
		$mail->Host = 'smtp.gmail.com'; 
		$mail->Username = 'ngeopolis@gmail.com';                 // SMTP username
    $mail->Password = 'ngeopolis1.';                           // SMTP password
		$mail->SMTPSecure = 'tls';     
    $mail->Port = 587;
    $mail->setFrom($sender);
		// $mail->addAddress($usermail, $username);
    $mail->addAddress($toEmail); // Admin Mail CC
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    $mail->addBCC('kolesan2k@yahoo.com');
    $mail->addBCC('kolesan2k@hotmail.com');
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'LiviaSoft Demo Invite';
    $mail->Body    = "<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office'>
    <head>
        <meta charset='utf-8'> <!-- utf-8 works for most cases -->
        <meta name='viewport' content='width=device-width'> 
        <meta http-equiv='X-UA-Compatible' content='IE=edge'> <!-- Use the latest (edge) version of IE rendering engine -->
        <meta name='x-apple-disable-message-reformatting'>  <!-- Disable auto-scale in iOS 10 Mail entirely -->
        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
    
        
        <style>
    
            
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
            }
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
          
            div[style*='margin: 16px 0'] {
                margin: 0 !important;
            }
    
           
            table,
            td {
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
    
            
            table {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
            table table table {
                table-layout: auto;
            }
    
            
            a {
                text-decoration: none;
            }
    
           
            img {
                -ms-interpolation-mode:bicubic;
            }
    
            
            *[x-apple-data-detectors],  
            .unstyle-auto-detected-links *,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
           
            .a6S {
               display: none !important;
               opacity: 0.01 !important;
           }
           img.g-img + div {
               display: none !important;
           }
    
             @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                .email-container {
                    min-width: 320px !important;
                }
            }
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                .email-container {
                    min-width: 375px !important;
                }
            }
            @media only screen and (min-device-width: 414px) {
                .email-container {
                    min-width: 414px !important;
                }
            }
    
        </style>
        
        <style>
    
            .button-td,
            .button-a {
                transition: all 100ms ease-in;
            }
          .button-td-primary:hover,
          .button-a-primary:hover {
              background: #555555 !important;
              border-color: #555555 !important;
          }
    
             @media screen and (max-width: 600px) {
    
                .email-container {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .fluid {
                    max-width: 100% !important;
                    height: auto !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }
    
                .stack-column,
                .stack-column-center {
                    display: block !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    direction: ltr !important;
                }
                
                .stack-column-center {
                    text-align: center !important;
                }
    
                
                .center-on-narrow {
                    text-align: center !important;
                    display: block !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                    float: none !important;
                }
                table.center-on-narrow {
                    display: inline-block !important;
                }
    
                
                .email-container p {
                    font-size: 17px !important;
                }
            }
    
        </style>
        
    </head>
    
    <body width='100%' style='margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #eeeeee;'>    <center style='width: 100%; background-color: #eeeeee;'>
        
    
            <!-- Visually Hidden Preheader Text : BEGIN -->
            
            <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' width='600' style='margin: 0 auto;' class='email-container'>
              <!-- Email Header : BEGIN -->
                <tr style='background: white;'>
                    <td style='padding: 10px 0; text-align: center'>
                        <img src='https://i.imgur.com/RgkIkFz.png' width='200' height='50' alt='alt_text' border='0' style='height: auto; font-family: sans-serif; font-size: 15px; line-height: 15px;'>
                    </td>
                </tr>
               <tr>
                    <td valign='middle' style='text-align: center; background-image: url(https://i.imgur.com/FW4Bsor.jpg); background-color: #eeeeee; background-position: center center !important; background-size: cover !important;'>
                       <div>
                          <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
                              <tr>
                                  <td valign='middle' style='text-align: center; padding-left: 15px; padding-top: 60px; padding-bottom: 60px; font-family: sans-serif; font-size: 15px; line-height: 30px; color: #fefefe; background-color:rgba(0,0,0,0.3);'>
                                      <h1 style='margin: 0; text-shadow: 1px 1px #222;'><strong>LiviaSoft Labs</strong></h1>
                                      <h2>Technical Excursion <br>Special Invitation</h2>
                                      <p>Sat Feb 29 2020</p>
                                      <a class='button-a button-a-primary' href='https://forms.gle/Jdx2YXuHD7nwvqft6' style='background: #1b96c3; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 13px; color: #ffffff; display: block; width: 50%; margin:auto; border-radius: 4px;'>Join the Conference</a>
                        
                                  </td>
                              </tr>
                          </table>
                      </div>
                      
                  </td>
              </tr>
             <tr>
                    <td style='background-color: #ffffff;'>
                        <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                            <tr>
                                <td style='padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding-bottom: 0px;'>
                    <h2 style='margin: 0 0 10px; font-size: 20px; line-height: 30px; color: #333333; font-weight: normal;'>Special Invitation</h2>
                    <p style='margin: 0 0 10px; text-align: center;'>LiviaSoft Labs and the entire LiviaSoft LLC team wish to cordially invite you to an upcoming event: </p>
                                    <ul style='padding: 0; margin: 0; list-style-type: disc;'>
                      <li style='margin:0 0 10px 20px;' class='list-item-first'>Title: <span style='color:#ff7000; font-weight: bold;'>'.$ title.'</span></li>
                      <li style='margin:0 0 10px 20px;'>Date: from <span style='color:#ff7000; font-weight: bold;'>'.$ start_date.'</span> to <span style='color:#ff7000; font-weight: bold;'>'.$ end_date.'</span></li>
                      <li style='margin: 0 0 10px 20px;'>Time: <span style='color:#ff7000; font-weight: bold;'>'.$ time.'</span> daily</li>
                      <li style='margin: 0 0 10px 20px;' class='list-item-last'>Venue: <span style='color:#ff7000; font-weight: bold;'>'.$ venue.'</span></li>
                    </ul>
                    <p style='margin: 0 10 10px; line-height: 20px; text-align:center;'>Featuring <span style='color:#ff7000; font-weight: bold;'>'.$ features.'</span> (e.g. Discussions and Hands on Sessions in Software Generated Modulated Schemes)</p>
                    <p style='margin: 0 10 10px; line-height: 20px; text-align:center;'>P.S: <span style='color:#ff7000; font-weight: bold;'>'.$ special_notes.'</span> Any Special invite notes (e.g. Dress Code etc)</p>
                                </td>
                            </tr>
                            <tr>
                                <td style='padding: 0 20px 20px;'>
                                    <!-- Button : BEGIN -->
                                    <table align='center' role='presentation' cellspacing='0' cellpadding='0' border='0' style='margin: auto;'>
                                        <tr>
                                            <td class='button-td button-td-primary' style='border-radius: 4px; background: #eeeeee;'>
                          <a class='button-a button-a-primary' href='https://forms.gle/Jdx2YXuHD7nwvqft6' style='background: #222222; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 13px; color: #ffffff; display: block; border-radius: 4px;'>Join RSVP Guest List</a>
                        </td>
                                        </tr>
                                    </table>
                                    <!-- Button : END -->
                                </td>
                            </tr>
    
                        </table>
                    </td>
                </tr>
                <!-- 1 Column Text + Button : END -->
                 <!-- Clear Spacer : BEGIN -->
              <tr>
                  <td aria-hidden='true' height='20' style='font-size: 0px; line-height: 0px;'>
                      &nbsp;
                  </td>
              </tr>
              <!-- Clear Spacer : END -->
    
              <!-- 1 Column Text : BEGIN -->
             
              <!-- 1 Column Text : END -->
    
          </table>
          <!-- Email Body : END -->
    
          <!-- Email Footer : BEGIN -->
          <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='max-width: 600px; background-color: #fff;'>
            <tr><td style='padding-top: 20px; text-align: center'>
                        <img src='https://i.imgur.com/RgkIkFz.png' width='200' height='50' alt='alt_text' border='0' style='height: auto; background: #ddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #eeeee;'>
                    </td></tr>
              <tr>
                  <td style='padding-top: 10px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: #888888;'>
                     
                
                      www.liviasoft.com<br><span class='unstyle-auto-detected-links'>#445 E, Cheyenne Mountain Blvd, Suite C225, <br> Colorado Springs, USA<br>+234 80 1234 5678</span>
                      <br><br>
                      
                  </td>
              </tr>
          </table>
          <!-- Email Footer : END -->
    
          <!-- Full Bleed Background Section : BEGIN -->
          <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%' style='background-color: #709f2b;'>
              <tr>
                  <td valign='top'>
                      <div style='max-width: 600px; margin: auto;' class='email-container'>
                          
                          <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                              <tr>
                                  <td style='padding: 20px; text-align: left; font-family: sans-serif; font-size: 12px; line-height: 20px; color: #ffffff;'>
                                      <p style='margin: 0; font-size: 12px;'>Dear sir, this is a <strong>sample email invite</strong> sent for your perusal, part of a larger project I've been working on over the holidays, to address some of the issues and observations raised from the WATRA conference</p>
                                  </td>
                              </tr>
                          </table>
                         
                      </div>
                  </td>
              </tr>
          </table>
          
        </center>
    </body>
    </html>
    ";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
      echo "successful";
    } catch (Exception $e) {
      echo 'failed. Mailer Error: ', $mail->ErrorInfo;
    } 
    }
    
    if ($_POST["action"] == "sendMultipleInvite")
    {

    }

    if ($_POST["action"] == "getInvites")
    {

    }
  }
?>