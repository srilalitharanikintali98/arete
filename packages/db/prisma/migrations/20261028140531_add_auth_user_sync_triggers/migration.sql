-- This is an empty migration.
-- 1. Create a "User" row whenever someone signs up
create or replace function public.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public."User" ("id", "email", "name", "updatedAt", "displayName")
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'name',
    now(),
    new.raw_user_meta_data ->> 'display_name'
  );
  return new;
end;
$$;

do $$
begin
  if exists (
    select 1 from pg_namespace where nspname = 'auth'
  ) then
    create trigger on_auth_user_created
      after insert on auth.users
      for each row
      execute function public.handle_new_auth_user();
  end if;
end;
$$;

-- 2. Keep the email in sync when it changes
create or replace function public.handle_auth_user_email_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  update public."User"
  set "email" = new.email,
      "updatedAt" = now()
  where "id" = new.id;
  return new;
end;
$$;

do $$
begin
  if exists (
    select 1 from pg_namespace where nspname = 'auth'
  ) then
    create trigger on_auth_user_email_changed
      after update of email on auth.users
      for each row
      when (old.email is distinct from new.email)
      execute function public.handle_auth_user_email_change();
  end if;
end;
$$;