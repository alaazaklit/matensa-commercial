<?php
// Get the full path of the current PHP file
$pageName = $_SERVER['PHP_SELF'];

// Extract the base name without the extension
$pageName = pathinfo($pageName, PATHINFO_FILENAME);

?>

<header class="<?php if($pageName=="index"){?>white-header<?php } ?>">
    <div class="container mod">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index">
                <?php if($pageName=="index"){?><img src="assets/images/white-logo.svg" alt="Logo"
                    class="header-height"><?php }else{?>
                <img src="assets/images/logo.svg" alt="Logo" class="header-height">
                <?php } ?>

            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item <?php if($pageName=="index"){?>active<?php } ?>">
                        <a class="nav-link" href="index">Home</a>
                    </li>
                    <li
                        class="nav-item dropdown <?php if($pageName=="growbusiness" || $pageName=="agreementoverview" || $pageName=="transactionhistory" || $pageName=="businessintegration"){?>active<?php } ?>">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Matensa for Business
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="growbusiness">Grow your Business</a>
                            <a class="dropdown-item" href="agreementoverview">Agreements Overview</a>
                            <!-- <div class="dropdown-divider"></div> -->
                            <a class="dropdown-item" href="transactionhistory">Transaction History</a>
                            <a class="dropdown-item" href="businessintegration">Seamless Business Integration</a>

                        </div>
                    </li>
                    <li class="nav-item <?php if($pageName=="aboutus"){?>active<?php } ?>">
                        <a class="nav-link" href="aboutus">About us</a>
                    </li>
                    <li class="nav-item <?php if($pageName=="highlights"){?>active<?php } ?>">
                        <a class="nav-link" href="highlights">Highlights</a>
                    </li>
                    <li class="nav-item <?php if($pageName=="faq"){?>active<?php } ?>">
                        <a class="nav-link" href="faq">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://dashboard.matensa.com/#/auth/login">Login</a>
                    </li>
                    <li class="nav-item nav-item-btn">
                        <a class="nav-link btn-style-1" href="https://dashboard.matensa.com/#/auth/register">
                            <i><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.1414 16.2539C13.9381 14.6077 12.5345 13.3333 10.8333 13.3333H9.16667C7.46548 13.3333 6.06194 14.6077 5.85864 16.2539M14.1414 16.2539C16.1655 14.9108 17.5 12.6112 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 12.6112 3.83447 14.9108 5.85864 16.2539M14.1414 16.2539C12.9547 17.0413 11.5309 17.5 10 17.5C8.46911 17.5 7.04534 17.0413 5.85864 16.2539M12.5 8.33333C12.5 9.71405 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71405 7.5 8.33333C7.5 6.95262 8.61929 5.83333 10 5.83333C11.3807 5.83333 12.5 6.95262 12.5 8.33333Z"
                                        stroke="white" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </i>
                            Sign Up </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>