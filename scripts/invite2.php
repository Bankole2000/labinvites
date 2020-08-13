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
    // $mail->addReplyTo('techybanky@gmail.com', 'Bankole');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('kolesan2k@yahoo.com');
    // $mail->addBCC('kolesan2k@hotmail.com');
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Job Application';
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
                font-family: sans-serif;
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
            .text-services {
              text-align: center !important;
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
                .services{
                  display: block !important;
                  width: 100% !important;
                }
            }
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                .email-container {
                    min-width: 375px !important;
                }
                .services{
                  display: block !important;
                  width: 100% !important;
                }
            }
            @media only screen and (min-device-width: 414px) and (max-device-width: 599px) {
                .email-container {
                    min-width: 414px !important;
                }
                .services{
                  display: block !important;
                  width: 100% !important;
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
              background: #171717 !important;
              border-color: #171717 !important;
          }
          .button-white-outline {
            background: transparent !important;
            border-radius: 5px;
            font-family: sans-serif; 
            font-size: 15px; 
            line-height: 15px; 
            text-decoration: none; 
            padding: 13px 13px; 
            color: #ffffff; 
            border: 2px solid white;

          }

          .button-a-primary {
            background: #0d0cb5; 
            text-align: center; 
            font-family: sans-serif; 
            font-size: 15px; 
            line-height: 15px; 
            text-decoration: none; 
            padding: 13px 13px; 
            color: #ffffff; 
            display: block; 
            width: 60%; 
            margin:auto; 
            border-radius: 4px; 
            border: 0px;
          }
    
             @media screen and (max-width: 600px) {
    
                .email-container {
                    width: 100% !important;
                    margin: auto !important;
                }
                .services {
                  padding: 15px 0px;
                  line-height: 1.5em;
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
                <tr style='background-color: none; height: 20px;'>
                  <td>

                  </td>
                </tr>
               <tr>
                    <td valign='middle' style='text-align: center; background-image: url(https://i.imgur.com/nAWnKa6.jpg); background-color: #eeeeee; background-position: top center !important; background-size: cover !important;'>
                       <div>
                          <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
                              <tr>
                                  <td valign='middle' style='text-align: center; padding: 60px 15px; font-family: sans-serif; font-size: 15px; line-height: 30px; color: #fefefe; background-color:rgba(0,0,0,0.6);'>
                                      <h1 style='margin: 0; text-shadow: 1px 1px #222;'><strong>Job Application</strong></h1>
                                      <h2 style='font-weight: lighter;'>Hello, my name is <strong>Bankole Esan</strong></h2>
                                      <p style='font-size: medium;'>And this email is regarding your post on whatsapp about a job vacancy for a programmer role. Please accept this as my application for the same.</p>
                                      <a class='button-a button-a-primary' href='https://forms.gle/Jdx2YXuHD7nwvqft6' style='background: #0d0cb5; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 13px; color: #ffffff; display: block; width: 50%; margin:auto; border-radius: 4px; border: 0px;'>Download My CV</a>
                        
                                  </td>
                              </tr>
                          </table>
                      </div>
                      
                  </td>
              </tr>
              <td class='email-section' style='width: 100%; padding: 5%; background-color:rgba(0,0,0,0.4); background: #fafafa;'>
						<table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
							<tbody><tr>
								<td valign='middle' width='40%'>
									<table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
										<tbody><tr>
											<td>
												<img src='https://i.imgur.com/apt5O1j.jpg' alt='' style='width: 100%; max-width: 600px; height: auto; margin: auto; display: block;'>
											</td>
										</tr>
									</tbody></table>
								</td>
								<td valign='middle' width='60%'>
									<table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
										<tbody><tr>
											<td class='text-services' style='text-align: left !important; padding-left:25px; font-family: sans-serif;'>
												<div class='heading-section'>
													<h2 style='margin-bottom: 0px;'>About me</h2>
													<p style='margin: 0px; line-height: 22px; margin-block-end: 0em; color: rgba(0,0,0,0.4) ;'>I consider myself an experienced yet humble developer who's always willing to learn.</p>
													<p><a href='https://bankole2000.github.io/portfolio/about.html' target='_blank' class='button-a button-a-primary' style='margin-block-start: 0em;'>Find out More</a></p>
												</div>
											</td>
										</tr>
									</tbody></table>
								</td>
							</tr>
            </tbody>
          </table>
          </td>
          <tr>
          <td class='email-section' style='background-color: white;'>
            <div class='heading-section' style='text-align: center; padding: 20px 30px; '>
              <h2>Core Skills</h2>
              <p style='color: rgba(0,0,0,0.4) ;'>Full Stack Software Development with modern web technologies, programming languages, frameworks and tools</p>
            </div>
            </td>
            
          
          </tr>
         <tr>
           <td>
          <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%' >
            <tbody><tr>
              <td valign='top' width='33.333%' style='padding: 0px;' class='services'>
                <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                  <tbody><tr>
                    <td class='icon'>
                      <img src='https://i.imgur.com/M0EMHzW.png' alt='' style='width: 40px; max-width: 600px; height: auto; margin: auto; display: block;'>
                    </td>
                  </tr>
                  <tr>
                    <td class='text-services' >
                      <h3>Documentation</h3>
                       <p>Requirements, Projects notes, Kanban, markdown, API Collections, HTML Emails, PDF, CSV, etc </p>
                    </td>
                  </tr>
                </tbody></table>
              </td>
              <td valign='top' width='33.333%' style='padding: 0px; background: rgba(0,0,0,.1);' class='services'>
                <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                  <tbody><tr>
                    <td class='icon'>
                      <img src='https://i.imgur.com/g27doVC.png' alt='' style='width: 40px; max-width: 600px; height: auto; margin: auto; display: block;'>
                    </td>
                  </tr>
                  <tr>
                    <td class='text-services'>
                      <h3>Design</h3>
                       <p>Branding, UI/UX Design, PSD to HTML, Sass, Flexbox, Grid, SVG, CSS Animation, GSAP, anime.js, three.js etc</p>
                    </td>
                  </tr>
                </tbody></table>
              </td>
              <td valign='top' width='33.333%' style='padding: 0px;' class='services'>
                <table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'>
                  <tbody><tr>
                    <td class='icon'>
                      <img src='https://i.imgur.com/tfFZhhQ.png' alt='' style='width: 40px; max-width: 600px; height: auto; margin: auto; display: block;'>
                    </td>
                  </tr>
                  <tr>
                    <td class='text-services'>
                      <h3>Development</h3>
                      <p>Database Modelling, RESTful, Ajax & Fetch, OOP, JWT, Business Logic Implementation, Payment Processing etc</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              </td>
            </tr>
          </tbody></table></td> </tr>
          <tr>
            <td class='email-section' style='background-color: white;'>
              <div class='heading-section' style='text-align: center; padding: 10px 30px;'>
                <h2>Tech Stack</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
              <table role='presentation' border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tbody ><tr style='text-align: center; margin-bottom: 20px;'>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/html5.svg'>
                    <p style='margin-top: 0;'>Html5</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/css3.svg'>
                    <p style='margin-top: 0;'>CSS3</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/javascript.svg'>
                    <p style='margin-top: 0;'>JS ES6</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/php.svg'>
                    <p style='margin-top: 0;'>PHP</p>
                  </td>											
                </tr>
                <tr>
                  <td height='16'></td>
                </tr>
                <tr style='text-align: center;'>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/mysql.svg'>
                    <p style='margin-top: 0;'>MySQL</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/python.svg'>
                    <p style='margin-top: 0;'>Python</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/django.svg'>
                    <p style='margin-top: 0;'>Django</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/jquery.svg'>
                    <p style='margin-top: 0;'>jQuery</p>
                  </td>											
                </tr>
                <tr style='text-align: center;'>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/git.svg'>
                    <p style='margin-top: 0;'>Git</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/sass.svg'>
                    <p style='margin-top: 0;'>Sass</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/npm.svg'>
                    <p style='margin-top: 0;'>Node JS</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/angular.svg'>
                    <p style='margin-top: 0;'>Angular</p>
                  </td>											
                </tr>
                <tr style='text-align: center;'>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/postman.svg'>
                    <p style='margin-top: 0;'>Postman</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/docker.svg'>
                    <p style='margin-top: 0;'>Docker</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/heroku.svg'>
                    <p style='margin-top: 0;'>Heroku</p>
                  </td>
                  <td>
                    <img height='32' width='32' src='https://unpkg.com/simple-icons@latest/icons/netlify.svg'>
                    <p style='margin-top: 0;'>Netlify</p>
                  </td>											
                </tr>
                                                         
                 
                  
                
              </tbody></table>
            
            </td>
          </tr>
          <tr>
            <td class='primary email-section' style='text-align:center; background: #0d0cb5; color: white;'>
              <div class='heading-section heading-section-white'>
                <h2>Get Ready For Modern Design</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p><a href='#' class='button button-white-outline'>Download My CV</a></p>
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