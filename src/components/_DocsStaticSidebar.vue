<template>
  <li>
    <router-link
      to="/affiliates"
      :class="$route.path.includes('affiliates') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Affiliates
    </router-link>
  </li>

  <li>
    <router-link
      to="/cloud"
      :class="$route.path.includes('cloud') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Cloud
    </router-link>
  </li>

  <li>
    <router-link
      to="/images"
      :class="$route.path.includes('images') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Images
    </router-link>
  </li>
  <li>
    <router-link
      to="/media-manager"
      :class="$route.path.includes('media-manager') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Media Manager
    </router-link>
  </li>

  <li>
    <router-link
      to="/on-the-fly"
      :class="$route.path.includes('on-the-fly') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      On-The-Fly
    </router-link>
  </li>

  <li>
    <router-link
      to="/open-source"
      :class="$route.path.includes('open-source') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Open Source
    </router-link>
  </li>

  <li>
    <router-link
      to="/privacy"
      :class="$route.path.includes('privacy') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Privacy
    </router-link>
  </li>

  <li>
    <router-link
      to="/video"
      :class="$route.path.includes('video') ? 'text-gray-900' : ''"
      class="flex items-center px-3 mb-4 transition-colors duration-200 hover:text-gray-900"
      ><div
        class="mr-3 rounded-md bg-gradient-to-br from-light-blue-400 to-indigo-500"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            d="M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z"
            fill="#93C5FD"
          ></path>
          <path
            d="M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z"
            fill="#BFDBFE"
          ></path>
          <path
            d="M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z"
            fill="#EFF6FF"
          ></path>
          <path d="M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z" fill="#60A5FA"></path>
        </svg>
      </div>
      Video
    </router-link>
  </li>
</template>
