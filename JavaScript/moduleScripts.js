function navBarInModules()
{
	var html = ['<section class = "nav-bar">',
            
            '<ul class = "listOfNavButtons">',
            
                '<li class = "nav-buttons"><a href="../index.html">Home</a></li>',
                '<li class = "nav-buttons"><a href="https://opentimetable.dcu.ie/">Timetable</a></li>',
                '<li class = "nav-buttons"><a href="../index.html">My Modules</a></li>',
                '<li class = "nav-buttons"><a href="https://www.dcu.ie/explore">About</a></li>',
                '<li class = "nav-buttons-logout"><a href="../login.html">Logout</a></li>',
            
            '</ul>',
        
        '</section>'].join("");

    document.write(html);
};