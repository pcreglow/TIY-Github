$.getJSON('../api/github/users/octocat.json')
.then(function(octocat) {

    console.log(octocat.avatar_url);

    $avatar = $('img#avatar');

    $avatar.attr('src', octocat.avatar_url);

    $('[data-bind="user.name"]').text(octocat.name);

    $('[data-bind="user.login"]').text(octocat.login);

    $('[data-bind="user.following"]').text(octocat.following);

    $('[data-bind="user.followers"]').text(octocat.followers);

    $('[data-bind="user.company"]').text(octocat.company);

    $('[data-bind="user.location"]').text(octocat.location);

    $('[data-bind="user.email"]').text(octocat.email);

    $('[data-bind="user.blog"]').text(octocat.blog);

  });
